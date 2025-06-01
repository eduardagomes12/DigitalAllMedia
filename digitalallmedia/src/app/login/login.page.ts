import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(
    private router: Router,
    private storage: Storage,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async login() {
    this.erroLogin = '';

    if (!this.email || !this.password) {
      this.erroLogin = 'Please fill in all fields.';
      return;
    }

    if (!this.email.includes('@')) {
      this.erroLogin = 'Please enter a valid email address.';
      return;
    }

    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: async (res) => {
        await this.storage.set('userEmail', this.email);
        this.router.navigateByUrl('/tabs');
      },
      error: (err) => {
        if (err.status === 404) {
          this.erroLogin = 'Email not found.';
        } else if (err.status === 401) {
          this.erroLogin = 'Incorrect password.';
        } else {
          this.erroLogin = 'Login failed. Please try again.';
        }
      }
    });
  }
}
