import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductDataService {
  private loadingStateSubject = new Subject<
    'loading' | 'loaded'
  >();
  loadingState$ = this.loadingStateSubject.asObservable();

  private productsSubject = new BehaviorSubject<Product[]>(
    []
  );
  products$ = this.productsSubject.asObservable();

  fetchProducts() {
    this.loadingStateSubject.next('loading');
    this.http
      .get('https://fakestoreapi.com/products')
      .pipe(
        map((response) =>
          this.productsSubject.next(
            response as unknown as Product[]
          )
        ),
        tap(() => {
          this.loadingStateSubject.next('loaded');
        })
      )
      .subscribe();
  }

  constructor(private http: HttpClient) {}
}
