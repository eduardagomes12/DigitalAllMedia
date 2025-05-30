import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-verificar-codigo',
  templateUrl: './verificar-codigo.page.html',
  styleUrls: ['./verificar-codigo.page.scss'],
  standalone: false,
})
export class VerificarCodigoPage {

  code1: string = '';
  code2: string = '';
  code3: string = '';
  code4: string = '';
  erro: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async verificarCodigo() {
    const codigo = `${this.code1}${this.code2}${this.code3}${this.code4}`;

    if (codigo.length === 4) {
      this.erro = '';

      const toast = await this.toastController.create({
        message: 'Code verified successfully!',
        duration: 2000,
        position: 'top',
        cssClass: 'custom-toast-success'
      });

      await toast.present();

      // Espera os 2 segundos do toast e depois redireciona
      setTimeout(() => {
        this.router.navigateByUrl('/nova-password');
      }, 2000);

    } else {
      this.erro = 'Invalid code';
    }
  }

  reenviarCodigo() {
    console.log('Código reenviado');
  }
}
