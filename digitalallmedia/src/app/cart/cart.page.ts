import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false
})
export class CartPage {

  orders = [
    { ref: 'ORD-001', title: 'Photo Album: Italy Trip', unitPrice: 24.99, quantity: 1 },
    { ref: 'ORD-002', title: 'Canvas Print: Sunset', unitPrice: 24.99, quantity: 2 }
  ];

  selectedRefs: string[] = [];

  constructor(private cartService: CartService, private router: Router) {}

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

  getTotal(): number {
    return this.orders
      .filter(o => this.selectedRefs.includes(o.ref))
      .reduce((sum, o) => sum + (o.unitPrice * o.quantity), 0);
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
  }

  finalizeOrder() {
    const selectedOrders = this.orders.filter(o => this.selectedRefs.includes(o.ref));
    this.cartService.setOrders(selectedOrders);
    this.router.navigate(['/confirm-order']);
  }
}
