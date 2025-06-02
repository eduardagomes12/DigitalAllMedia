import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private selectedOrders: any[] = [];

  constructor() {}

  setOrders(orders: any[]) {
    this.selectedOrders = orders;
  }

  getOrders() {
    return this.selectedOrders;
  }

  clearOrders() {
    this.selectedOrders = [];
  }
}
