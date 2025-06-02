import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage {
  orders = [
    { ref: 'ORD-001', title: 'Photo Album: Italy Trip', quantity: 1, unitPrice: 24.99 },
    { ref: 'ORD-002', title: 'Canvas Print: Sunset', quantity: 2, unitPrice: 24.99 },
  ];

  selectedRefs: Set<string> = new Set();

  toggleSelection(ref: string) {
    if (this.selectedRefs.has(ref)) {
      this.selectedRefs.delete(ref);
    } else {
      this.selectedRefs.add(ref);
    }
  }

  isSelected(ref: string): boolean {
    return this.selectedRefs.has(ref);
  }

  getTotal(): string {
    const total = this.orders
      .filter(order => this.selectedRefs.has(order.ref))
      .reduce((sum, o) => sum + o.quantity * o.unitPrice, 0);

    return total.toFixed(2);
  }

  increaseQuantity(order: any) {
    order.quantity++;
  }

  decreaseQuantity(order: any) {
    if (order.quantity > 1) {
      order.quantity--;
    }
  }

  removeOrder(ref: string) {
    this.orders = this.orders.filter(order => order.ref !== ref);
    this.selectedRefs.delete(ref);
  }


}
