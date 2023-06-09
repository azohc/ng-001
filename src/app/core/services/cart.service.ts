import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnDestroy {
  private cartItemsSubject = new BehaviorSubject<Product[]>(
    []
  );

  private checkedOutSubject = new BehaviorSubject(false);
  checkedOut$ = this.checkedOutSubject.asObservable();

  cartItems$ = this.cartItemsSubject.asObservable();

  checkoutSubscription?: Subscription;

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    this.checkoutSubscription?.unsubscribe();
  }

  addItemToCart(product: Product) {
    this.cartItemsSubject.next([
      ...this.cartItemsSubject.getValue(),
      product,
    ]);
  }

  checkOut(
    customerData: Partial<{
      firstName: string | null;
      lastName: string | null;
      email: string | null;
      country: string | null;
      address: string | null;
      zipCode: string | null;
      state: string | null;
      termsAndConditions: boolean | null;
    }>
  ) {
    this.clearCart();
    this.checkedOutSubject.next(true);
    this.checkoutSubscription = this.cartItems$.subscribe(
      (cartItems) =>
        this.http
          .post(
            'localhost:4040/api/todo',
            JSON.stringify({
              customerData,
              cartItems,
            })
          )
          .subscribe()
    );
  }

  deCheckOut() {
    this.checkedOutSubject.next(false);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
}
