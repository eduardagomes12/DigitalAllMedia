import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: false,
})
export class DetalhesPage implements OnInit {
  deliveryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private router: Router,
    private storage: Storage
  ) {}

  async ngOnInit() {
    const today = new Date();
    const futureDate = new Date(today.setDate(today.getDate() + 7));
    const dateStr = futureDate.toISOString().split('T')[0];

    this.deliveryForm = this.fb.group({
      nome: ['', Validators.required],
      contacto: ['', [Validators.required, Validators.pattern('^\\d{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      morada: ['', Validators.required],
      codigoPostal: ['', [Validators.required, Validators.pattern('^\\d{4}-\\d{3}$')]],
      cidade: ['', Validators.required],
      infoAdicional: [''],
      metodo: ['', Validators.required],
      data: [dateStr, Validators.required]
    });

    await this.storage.create();
    const savedInfo = await this.storage.get('deliveryInfo');
    if (savedInfo) {
      this.deliveryForm.patchValue(savedInfo);
    }
  }

  async adicionarDetalhes() {
    if (this.deliveryForm.valid) {
      await this.storage.set('deliveryInfo', this.deliveryForm.value);

      const toast = await this.toastController.create({
        message: 'Delivery details added successfully!',
        duration: 2000,
        cssClass: 'custom-toast-success',
      });
      await toast.present();

      this.router.navigate(['/confirm-order']);
    } else {
      this.deliveryForm.markAllAsTouched();

      const toast = await this.toastController.create({
        message: 'Please fill in all required fields correctly.',
        duration: 2500,
        color: 'danger'
      });
      await toast.present();
    }
  }
}
 