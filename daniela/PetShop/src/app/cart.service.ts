import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items: IProducts[] = [];
  constructor() { }

  addToCard(product: IProducts) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
