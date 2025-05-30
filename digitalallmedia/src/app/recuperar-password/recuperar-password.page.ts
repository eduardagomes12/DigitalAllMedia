import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
  standalone: false,
})
export class RecuperarPasswordPage {

  email: string = '';
  erro: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async enviarCodigo() {
    if (!this.validarEmail(this.email)) {
      this.erro = 'Invalid email address';
      
      const toast = await this.toastController.create({
        message: 'Please enter a valid email address!',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });

      await toast.present();
    } else {
      this.erro = '';
      this.router.navigateByUrl('/verificar-codigo');
    }
  }

  voltar() {
    this.router.navigateByUrl('/login');
  }

  validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}
