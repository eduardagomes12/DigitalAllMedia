import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface Album {
  name: string;
  cover: string;
  images: string[];
}

@Component({
  selector: 'app-select-print-type',
  templateUrl: './select-print-type.page.html',
  styleUrls: ['./select-print-type.page.scss'],
  standalone: false,
})
export class SelectPrintTypePage {
  selectedFotos: string[] = [];
  selectedAlbuns: Album[] = [];

  printOptionsPhotos: string[] = [
    '10×15 cm',
    '15×20 cm',
    '20×25 cm',
    'A4 (21×29,7 cm)',
    'A3 (29,7×42 cm)',
    '30×40 cm'
  ];

  printOptionsAlbums: string[] = [
    'PhotoBook',
    'Mini Album (10x15)',
    'Premium Album (Layflat)',
    'Fine Art (Cotton Paper)',
    'Canvas (Tela)'
  ];

  selectedPhotoOptions: string[] = [];
  selectedAlbumOptions: string[] = [];

  constructor(private router: Router, private storage: Storage) {}

  async ionViewWillEnter() {
    await this.storage.create();
    this.selectedFotos = await this.storage.get('selectedFotos') || [];
    this.selectedAlbuns = await this.storage.get('selectedAlbuns') || [];

    this.selectedPhotoOptions = new Array(this.selectedFotos.length).fill('');
    this.selectedAlbumOptions = new Array(this.selectedAlbuns.length).fill('');
  }

  continuar() {
    console.log('Prints para fotos:', this.selectedPhotoOptions);
    console.log('Prints para álbuns:', this.selectedAlbumOptions);

    // this.router.navigate(['/next-step'], { state: { ... } });
  }
}
