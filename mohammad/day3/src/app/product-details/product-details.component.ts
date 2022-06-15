import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProducts = {} as IProducts;
  id: number = 0;
  // CS: CartService;
  // cartService = new CartService();
  constructor(private route: ActivatedRoute, private CS: CartService) {
    // this.CS = new CartService;
  }

  addToCart() {
    alert("added to cart");
    this.CS.addToCart(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]; // + == Number()
      this.product = products[this.id];
    })
  }

}
