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

  async continuarShopping() {
    await this.storage.create();

    const ref = 'ORD-' + Date.now(); // Ex: ORD-17180599123
    const total = this.items.reduce((sum, item) => {
      const price = this.getPrice(item.type);
      return sum + (item.qty * price);
    }, 0);

    const order = {
      ref,
      title: 'Custom Photo Order',
      unitPrice: total,
      quantity: 1
    };

    const pendingOrders = await this.storage.get('pendingOrders') || [];
    pendingOrders.push(order);
    await this.storage.set('pendingOrders', pendingOrders);

    this.router.navigate(['/tabs']);
  }

  getPrice(type: string): number {
    const priceMap: { [key: string]: number } = {
      '10×15 cm': 0.50,
      '15×20 cm': 0.65,
      '20×25 cm': 0.80,
      'A4 (21×29,7 cm)': 1.40,
      'A3 (29,7×42 cm)': 2.20,
      '30×40 cm': 2.75,
      'PhotoBook': 10.99,
      'Mini Album (10x15)': 6.49,
      'Premium Album (Layflat)': 15.99,
      'Fine Art (Cotton Paper)': 20.99,
      'Canvas (Tela)': 13.50
    };
    return priceMap[type] || 0;
  }

  goToTabs() {
    this.router.navigate(['/tabs']);
  }
}
