import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  guardar() {
    if (this.novaPassword !== this.confirmarPassword) {
      this.erro = 'As passwords não coincidem.';
    } else {
      this.erro = '';
      alert('Password alterada com sucesso!');
      this.router.navigateByUrl('/login');
    }
  }
}
