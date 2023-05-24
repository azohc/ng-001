import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products/types';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss'],
})
export class ProductsCartComponent implements OnInit {
  @Input()
  cartItems: Product[] = [];

  constructor() {}

  ngOnInit(): void {}

  get cartTotal() {
    return this.cartItems
      .reduce((prev, curr) => prev + curr.price, 0)
      .toFixed(2);
  }
}
