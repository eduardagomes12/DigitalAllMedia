import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificar-codigo',
  templateUrl: './verificar-codigo.page.html',
  styleUrls: ['./verificar-codigo.page.scss'],
  standalone: false,
})
export class VerificarCodigoPage {

  codigo: string = '';
  erro: string = '';

  constructor(private router: Router) {}

  verificar() {
    if (this.codigo === '123456') {
      this.erro = '';
      this.router.navigateByUrl('/nova-password');
    } else {
      this.erro = 'Código inválido';
    }
  }
}
