import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  irParaTermos() {
    if (!this.nome || !this.email || !this.password || !this.confirmarPassword) {
      this.erro = 'Please fill out all fields.';
    } else if (this.password !== this.confirmarPassword) {
      this.erro = 'Passwords do not match.';
    } else {
      this.erro = '';
      this.router.navigateByUrl('/termos');
    }
  }
}
