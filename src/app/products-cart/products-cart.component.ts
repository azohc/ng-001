import { Component, Input } from '@angular/core';
import { Product } from '../products/types';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss'],
})
export class ProductsCartComponent {
  @Input()
  cartItems: Product[] = [];

  get totalCartSum() {
    return this.cartItems.reduce((prev, curr) => prev + curr.price, 0);
  }
}
