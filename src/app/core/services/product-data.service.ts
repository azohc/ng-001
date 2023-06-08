import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  map,
  tap,
} from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductDataService {
  private isLoadingSubject = new BehaviorSubject(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  fetchProducts(): Observable<Product[]> {
    this.isLoadingSubject.next(true);
    return this.http
      .get('https://fakestoreapi.com/products')
      .pipe(
        map((response) => response as unknown as Product[]),
        tap(() => {
          // TODO review why this never gets called
          this.isLoadingSubject.next(false);
          console.log('loaded');
        })
      );
  }

  constructor(private http: HttpClient) {}
}
