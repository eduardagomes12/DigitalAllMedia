import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
  standalone: false,
})
export class RecuperarPasswordPage {

  email: string = '';
  erro: string = '';

  constructor(private router: Router) {}

  enviarCodigo() {
    if (!this.email.includes('@')) {
      this.erro = 'Email inválido';
    } else {
      this.erro = '';
      // Simula envio e vai para o passo seguinte
      this.router.navigateByUrl('/verificar-codigo');
    }
  }
}
