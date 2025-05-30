import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nova-password',
  templateUrl: './nova-password.page.html',
  styleUrls: ['./nova-password.page.scss'],
  standalone: false,
})
export class NovaPasswordPage {

  novaPassword: string = '';
  confirmarPassword: string = '';
  erro: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async guardar() {
    if (!this.novaPassword || !this.confirmarPassword) {
      this.erro = 'Please fill out both fields.';
    } else if (this.novaPassword !== this.confirmarPassword) {
      this.erro = 'Passwords do not match.';
    } else {
      this.erro = '';

      const toast = await this.toastController.create({
        message: 'Password updated successfully!',
        duration: 2000,
        position: 'top',
        cssClass: 'custom-toast-success'
      });

      await toast.present();

      setTimeout(() => {
        this.router.navigateByUrl('/login');
      }, 2000);
    }
  }
}
