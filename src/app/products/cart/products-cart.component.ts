import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

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

  get groupedCartItems(): Map<Product, number> {
    const map = new Map<Product, number>();
    this.cartItems.forEach((product) => {
      const count = map.get(product);
      if (map.has(product) && count) {
        map.set(product, count + 1);
      } else {
        map.set(product, 1);
      }
    });
    return map;
  }
}
