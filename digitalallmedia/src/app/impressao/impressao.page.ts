import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impressao',
  templateUrl: './impressao.page.html',
  styleUrls: ['./impressao.page.scss'],
  standalone: false,
})
export class ImpressaoPage {
  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
