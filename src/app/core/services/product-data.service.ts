import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductDataService {
  products$: Observable<Product[]> = this.http
    .get('https://fakestoreapi.com/products')
    .pipe(
      map((response) => response as unknown as Product[])
    );

  constructor(private http: HttpClient) {}
}
