import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false
})
export class CartPage {
  orders: any[] = [];
  selectedRefs: string[] = [];

  constructor(
    private cartService: CartService,
    private storage: Storage,
    private router: Router
  ) {}

  async ionViewWillEnter() {
    await this.storage.create();
    this.orders = await this.storage.get('pendingOrders') || [];
  }

  isSelected(ref: string): boolean {
    return this.selectedRefs.includes(ref);
  }

  toggleSelection(ref: string) {
    if (this.isSelected(ref)) {
      this.selectedRefs = this.selectedRefs.filter(r => r !== ref);
    } else {
      this.selectedRefs.push(ref);
    }
  }

  getTotal(): string {
    const total = this.orders
      .filter(o => this.selectedRefs.includes(o.ref))
      .reduce((sum, o) => sum + (o.unitPrice * o.quantity), 0);

    return total.toFixed(2); // ← formata com 2 casas decimais
  }


  increaseQuantity(order: any) {
    order.quantity++;
  }

  decreaseQuantity(order: any) {
    if (order.quantity > 1) order.quantity--;
  }

  removeOrder(ref: string) {
    this.orders = this.orders.filter(o => o.ref !== ref);
    this.selectedRefs = this.selectedRefs.filter(r => r !== ref);
    this.storage.set('pendingOrders', this.orders); // atualiza o storage
  }

    async finalizeOrder() {
    const selectedOrders = this.orders.filter(o => this.selectedRefs.includes(o.ref));

    if (selectedOrders.length > 0) {
      const selectedOrder = selectedOrders[0]; // vamos assumir uma por vez (como no exemplo)

      // Guardar os dados reais para a próxima página
      const finalItems = await this.storage.get('finalItems');
      const finalDeliveryInfo = await this.storage.get('finalDeliveryInfo');

      await this.storage.set('finalItems', finalItems);
      await this.storage.set('finalDeliveryInfo', finalDeliveryInfo);

      //  Limpar a encomenda selecionada do array de pendingOrders
      const allPending = await this.storage.get('pendingOrders') || [];
      const updatedPending = allPending.filter((o: any) => o.ref !== selectedOrder.ref);
      await this.storage.set('pendingOrders', updatedPending);

      this.router.navigate(['/confirmar-encomenda']);
    }
  }

}
