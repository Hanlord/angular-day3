import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<IProducts> = [];
  constructor(private CS : CartService) { }

  ngOnInit(): void {
    this.cart = this.CS.getCart();
    // console.table(this.cart);
  }

}
