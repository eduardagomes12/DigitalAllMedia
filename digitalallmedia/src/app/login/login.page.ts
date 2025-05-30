import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; // ADICIONADO

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

  constructor(private router: Router, private storage: Storage) {} // ADICIONADO

  async ngOnInit() {
    await this.storage.create(); // GARANTE QUE O STORAGE ESTÁ PRONTO
  }

  async login() {
    if (this.email === 'admin@email.com' && this.password === '1234') {
      this.erroLogin = '';

      // GUARDA O EMAIL NO STORAGE
      await this.storage.set('userEmail', this.email);

      this.router.navigateByUrl('/tabs');
    } else {
      this.erroLogin = 'Credenciais inválidas. Tenta novamente.';
    }
  }
}
