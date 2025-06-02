import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface PrintItem {
  cover?: string;
  type: string;
  qty: number;
}

@Component({
  selector: 'app-confirmar-encomenda',
  templateUrl: './confirmar-encomenda.page.html',
  styleUrls: ['./confirmar-encomenda.page.scss'],
  standalone: false,
})
export class ConfirmarEncomendaPage {
  items: PrintItem[] = [];
  total: number = 0;
  paymentMethod: string = '';
  mbReference: string = '';
  deliveryInfo: any = {};

  priceMap: { [key: string]: number } = {
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

  constructor(private router: Router, private storage: Storage) {}

  async ionViewWillEnter() {
    await this.storage.create();
    this.items = await this.storage.get('finalItems') || [];
    this.deliveryInfo = await this.storage.get('finalDeliveryInfo') || {};

    console.log('ITEMS:', this.items);
    console.log('DELIVERY INFO:', this.deliveryInfo);

    this.calculateTotal();
    this.generateMbReference();
  }

  getPrice(type: string): number {
    return this.priceMap[type] || 0;
  }

  calculateTotal() {
    this.total = this.items.reduce((sum, item) => {
      return sum + this.getPrice(item.type) * item.qty;
    }, 0);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.calculateTotal();
  }

  togglePayment(method: string) {
    this.paymentMethod = method;
  }

  generateMbReference() {
    const part1 = Math.floor(Math.random() * 900 + 100);
    const part2 = Math.floor(Math.random() * 900 + 100);
    const part3 = Math.floor(Math.random() * 900 + 100);
    this.mbReference = `${part1} ${part2} ${part3}`;
  }

  async confirmOrder() {
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    const alert = document.createElement('ion-alert');
    alert.header = 'Order Confirmed';
    alert.message = `
      Your order number is <strong>#${orderNumber}</strong>.<br>
      Thank you for shopping with us!
    `;
    alert.buttons = [
      {
        text: 'Close',
        cssClass: 'custom-alert-button',
        handler: () => {
          this.router.navigate(['/tabs']);
        }
      }
    ];
    document.body.appendChild(alert);
    await alert.present();

    console.log('Order confirmed', {
      items: this.items,
      total: this.total,
      paymentMethod: this.paymentMethod,
      deliveryInfo: this.deliveryInfo,
      orderNumber: `#${orderNumber}`
    });
  }

  cancel() {
    this.router.navigate(['/tabs']);
  }
}
