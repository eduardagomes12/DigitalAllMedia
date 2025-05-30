import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  erroLogin: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.email === 'admin@email.com' && this.password === '1234') {
      // Limpa erro (caso haja) e navega para as tabs
      this.erroLogin = '';
      this.router.navigateByUrl('/tabs');
    } else {
      // Mostra erro
      this.erroLogin = 'Credenciais inválidas. Tenta novamente.';
    }
  }
}
