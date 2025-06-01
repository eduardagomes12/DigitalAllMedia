import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


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
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const today = new Date();
    const futureDate = new Date(today.setDate(today.getDate() + 7));
    const dateStr = futureDate.toISOString().split('T')[0]; // formato yyyy-mm-dd

    this.deliveryForm = this.fb.group({
      nome: ['', Validators.required],
      contacto: ['', [Validators.required, Validators.pattern('^\\d{9}$')]], // 9 dígitos exatos
      email: ['', [Validators.required, Validators.email]],
      morada: ['', Validators.required],
      codigoPostal: ['', [Validators.required, Validators.pattern('^\\d{4}-\\d{3}$')]], // Formato 1234-567
      cidade: ['', Validators.required],
      infoAdicional: [''],
      metodo: ['', Validators.required],
      data: [dateStr, Validators.required]
    });
  }

  async adicionarDetalhes() {
    if (this.deliveryForm.valid) {
      console.log(this.deliveryForm.value);
      const toast = await this.toastController.create({
        message: 'Delivery details added successfully!',
        duration: 2000,
        cssClass: 'custom-toast-success',
      });
      await toast.present();
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
