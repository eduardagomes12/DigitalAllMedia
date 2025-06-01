import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

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

  constructor(private router: Router, private storage: Storage) {}

  async ionViewWillEnter() {
    await this.storage.create();
    this.selectedFotos = await this.storage.get('selectedFotos') || [];
    this.selectedAlbuns = await this.storage.get('selectedAlbuns') || [];
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
