import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.page.html',
  styleUrls: ['./termos.page.scss'],
  standalone: false,
})
export class TermosPage {

  constructor(private router: Router) {}

  aceitar() {
    // Depois de aceitar, vai para o signup (ou outro passo)
    this.router.navigateByUrl('/signup');
  }
}
