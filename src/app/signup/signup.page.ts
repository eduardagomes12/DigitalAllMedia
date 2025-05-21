import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false,
})
export class SignupPage implements OnInit {

  nome: string = '';
  email: string = '';
  password: string = '';
  confirmarPassword: string = '';
  erro: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  criarConta() {
    if (!this.nome || !this.email || !this.password || !this.confirmarPassword) {
      this.erro = 'Preenche todos os campos.';
    } else if (this.password !== this.confirmarPassword) {
      this.erro = 'As palavras-passe não coincidem.';
    } else {
      // Podes guardar num service ou ir para o backend mais tarde
      this.erro = '';
      alert('Conta criada com sucesso!');
      this.router.navigateByUrl('/login');
    }
  }
}
