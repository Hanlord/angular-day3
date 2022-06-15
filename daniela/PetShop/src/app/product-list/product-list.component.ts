import { Component, OnInit } from '@angular/core';
import { animals } from '../products';
import { IProducts } from '../IProducts';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  animals: IProducts[] = animals;

  constructor() { }

  ngOnInit(): void {
  }

}
