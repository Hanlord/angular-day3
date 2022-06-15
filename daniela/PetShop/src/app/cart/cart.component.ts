import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
items: IProducts[] = [];

checkoutForm = new FormGroup({
  name: new FormControl(''),
  address: new FormControl('')
});

  constructor(private cartService: CartService) { }

  clearCart() {
    window.alert('Your cart has been cleared');
    this.items = this.cartService.clearCart();
  }

  onSubmit() {
    console.warn('Your order has been submitted', 
    this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
