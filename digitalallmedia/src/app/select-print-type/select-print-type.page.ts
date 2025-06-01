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

  printOptionsPhotos = [
    { label: '10×15 cm', price: 0.50 },
    { label: '15×20 cm', price: 0.65 },
    { label: '20×25 cm', price: 0.80 },
    { label: 'A4 (21×29,7 cm)', price: 1.40 },
    { label: 'A3 (29,7×42 cm)', price: 2.20 },
    { label: '30×40 cm', price: 2.75 }
  ];

  printOptionsAlbums = [
    { label: 'PhotoBook', price: 10.99 },
    { label: 'Mini Album (10x15)', price: 6.49 },
    { label: 'Premium Album (Layflat)', price: 15.99 },
    { label: 'Fine Art (Cotton Paper)', price: 20.99 },
    { label: 'Canvas (Tela)', price: 13.50 }
  ];

  selectedPhotoOptions: string[][] = [];
  selectedAlbumOptions: string[][] = [];

  constructor(private router: Router, private storage: Storage) {}

  async ionViewWillEnter() {
    await this.storage.create();
    this.selectedFotos = await this.storage.get('selectedFotos') || [];
    this.selectedAlbuns = await this.storage.get('selectedAlbuns') || [];

    this.selectedPhotoOptions = this.selectedFotos.map(() => []);
    this.selectedAlbumOptions = this.selectedAlbuns.map(() => []);
  }

  togglePhotoOption(index: number, option: string, checked: boolean) {
    const list = this.selectedPhotoOptions[index];
    if (checked) {
      if (!list.includes(option)) list.push(option);
    } else {
      this.selectedPhotoOptions[index] = list.filter(o => o !== option);
    }
  }

  toggleAlbumOption(index: number, option: string, checked: boolean) {
    const list = this.selectedAlbumOptions[index];
    if (checked) {
      if (!list.includes(option)) list.push(option);
    } else {
      this.selectedAlbumOptions[index] = list.filter(o => o !== option);
    }
  }

  isFormValid(): boolean {
    return this.selectedPhotoOptions.every(opt => opt.length > 0) &&
           this.selectedAlbumOptions.every(opt => opt.length > 0);
  }

  async continuar() {
    if (!this.isFormValid()) return;

    await this.storage.set('selectedFotos', this.selectedFotos);
    await this.storage.set('selectedAlbuns', this.selectedAlbuns);
    await this.storage.set('photoPrints', this.selectedPhotoOptions);
    await this.storage.set('albumPrints', this.selectedAlbumOptions);

    this.router.navigate(['/delivery-details']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
