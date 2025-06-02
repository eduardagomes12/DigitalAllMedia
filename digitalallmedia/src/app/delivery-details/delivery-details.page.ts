import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface Album {
  name: string;
  cover: string;
  images: string[];
}

interface PrintItem {
  cover: string;
  type: string;  // tipo de impressão
  qty: number;
}

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.page.html',
  styleUrls: ['./delivery-details.page.scss'],
  standalone: false,
})
export class DeliveryDetailsPage {
  selectedFotos: string[] = [];
  selectedAlbuns: Album[] = [];
  items: PrintItem[] = [];

  constructor(private router: Router, private storage: Storage) {}

  async ionViewWillEnter() {
    await this.storage.create();
    this.selectedFotos = await this.storage.get('selectedFotos') || [];
    this.selectedAlbuns = await this.storage.get('selectedAlbuns') || [];
    const photoTypes: string[][] = await this.storage.get('photoPrints') || [];
    const albumTypes: string[][] = await this.storage.get('albumPrints') || [];

    this.items = [];

    this.selectedFotos.forEach((foto, i) => {
      const types = photoTypes[i] || [];
      types.forEach(type => {
        this.items.push({
          cover: foto,
          type,
          qty: 1
        });
      });
    });

    this.selectedAlbuns.forEach((album, i) => {
      const types = albumTypes[i] || [];
      types.forEach(type => {
        this.items.push({
          cover: album.cover,
          type,
          qty: 1
        });
      });
    });
  }

  increment(index: number) {
    this.items[index].qty++;
  }

  decrement(index: number) {
    if (this.items[index].qty > 1) {
      this.items[index].qty--;
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  async continuar() {
    // 👉 Guarda os items no storage para serem usados no resumo final
    await this.storage.set('finalItems', this.items);
    this.router.navigate(['/detalhes']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
