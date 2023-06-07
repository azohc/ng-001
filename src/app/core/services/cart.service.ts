import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Product[]>(
    []
  );
  // what are the ways of making isEmpty into a non-observable member of CartService? is there a concise way? TODO review
  isEmpty = true;
  checkedOut = false;

  cartItems$ = this.cartItemsSubject.asObservable();

  addItemToCart(product: Product) {
    this.isEmpty = false;
    this.cartItemsSubject.next([
      ...this.cartItemsSubject.getValue(),
      product,
    ]);
  }

  checkout() {
    this.clearCart();
    this.checkedOut = true;
  }

  clearCart() {
    this.isEmpty = true;
    this.cartItemsSubject.next([]);
  }
}
