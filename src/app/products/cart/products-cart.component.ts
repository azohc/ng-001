import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss'],
})
export class ProductsCartComponent {
  cartItems$ = this.cartService.cartItems$;

  totalCartSum$ = this.cartItems$.pipe(
    map((items) =>
      items.reduce((prev, curr) => prev + curr.price, 0)
    )
  );

  groupedCartItems$ = this.cartItems$.pipe(
    map((items) => {
      const map = new Map<Product, number>();
      items.forEach((product) => {
        const count = map.get(product);
        if (map.has(product) && count) {
          map.set(product, count + 1);
        } else {
          map.set(product, 1);
        }
      });
      return map;
    })
  );

  get atShopRoute() {
    return this.router.url === '/shop';
  }

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}
}
