import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

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
  profileImageUrl: string = 'assets/images/default-avatar.png'; // default
  erro: string = '';

  constructor(
    private toastController: ToastController,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  async showToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position: 'top',
      color: 'digitalallmedia',
      cssClass: 'custom-toast-success'
    });
    toast.present();
  }

  irParaTermos() {
    if (!this.nome || !this.email || !this.password || !this.confirmarPassword) {
      this.erro = 'Please fill out all fields.';
      return;
    }

    if (this.password !== this.confirmarPassword) {
      this.erro = 'Passwords do not match.';
      return;
    }

    this.erro = '';

    this.authService.register({
      nome: this.nome,
      email: this.email,
      password: this.password,
      profileImageUrl: this.profileImageUrl // adiciona a imagem no registo
    }).subscribe({
      next: async () => {
        await this.showToast('Account created successfully!');
        this.router.navigateByUrl('/termos');
      },
      error: (err) => {
        this.erro = 'Failed to create account. Please check your data.';
        console.error(err);
        this.showToast(this.erro);
      }
    });
  }
}
