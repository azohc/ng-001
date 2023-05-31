import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Product[]>(
    []
  );

  cartItems$ = this.cartItemsSubject.asObservable();

  addItemToCart(product: Product) {
    this.cartItemsSubject.next([
      ...this.cartItemsSubject.getValue(),
      product,
    ]);
  }
}
