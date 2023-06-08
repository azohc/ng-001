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

  private checkedOutSubject = new BehaviorSubject(false);
  checkedOut$ = this.checkedOutSubject.asObservable();

  cartItems$ = this.cartItemsSubject.asObservable();

  addItemToCart(product: Product) {
    this.cartItemsSubject.next([
      ...this.cartItemsSubject.getValue(),
      product,
    ]);
  }

  checkOut() {
    this.clearCart();
    this.checkedOutSubject.next(true);
  }

  deCheckOut() {
    this.checkedOutSubject.next(false);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
}
