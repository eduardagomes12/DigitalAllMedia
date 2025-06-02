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
  type: string;
  qty: number;
}

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.page.html',
  styleUrls: ['./confirm-order.page.scss'],
  standalone: false,
})
export class ConfirmOrderPage {
  selectedFotos: string[] = [];
  selectedAlbuns: Album[] = [];
  items: PrintItem[] = [];
  deliveryInfo: any = {};

  constructor(private router: Router, private storage: Storage) {}

  async ionViewWillEnter() {
    await this.storage.create();

    this.selectedFotos = await this.storage.get('selectedFotos') || [];
    this.selectedAlbuns = await this.storage.get('selectedAlbuns') || [];
    const photoTypes: string[][] = await this.storage.get('photoPrints') || [];
    const albumTypes: string[][] = await this.storage.get('albumPrints') || [];
    const storedInfo = await this.storage.get('deliveryInfo') || {};

    this.deliveryInfo = {
      nome: storedInfo.nome || '',
      morada: storedInfo.morada || '',
      codigoPostal: storedInfo.codigoPostal || '',
      cidade: storedInfo.cidade || '',
      contacto: storedInfo.contacto || '',
      email: storedInfo.email || '',
      metodo: storedInfo.metodo || '',
      data: storedInfo.data || '',
      infoAdicional: storedInfo.infoAdicional || ''
    };

    this.items = [];

    this.selectedFotos.forEach((foto, i) => {
      const types = photoTypes[i] || [];
      types.forEach(type => {
        this.items.push({ cover: foto, type, qty: 1 });
      });
    });

    this.selectedAlbuns.forEach((album, i) => {
      const types = albumTypes[i] || [];
      types.forEach(type => {
        this.items.push({ cover: album.cover, type, qty: 1 });
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

  async confirmar() {
    await this.storage.set('finalItems', this.items);
    await this.storage.set('finalDeliveryInfo', this.deliveryInfo);
    this.router.navigate(['/confirmar-encomenda']);
  }

  goToTabs() {
    this.router.navigate(['/tabs']);
  }
}
