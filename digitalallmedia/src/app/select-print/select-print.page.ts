import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Album {
  name: string;
  cover: string;
  images: string[];
}

@Component({
  selector: 'app-select-print',
  templateUrl: './select-print.page.html',
  styleUrls: ['./select-print.page.scss'],
  standalone: false,
})
export class SelectPrintPage {
  selectedFotos: string[] = [];
  selectedAlbuns: Album[] = [];

  constructor(private router: Router) {}

  ionViewWillEnter() {
    const state = history.state;
    this.selectedFotos = state?.fotos || [];
    this.selectedAlbuns = state?.albuns || [];
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
