import { Injectable } from '@angular/core';
import products from '../assets/products.json';
import { Observable, of } from 'rxjs';
import { Product } from './products/types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  // TODO ask Pablo
  // if this function is fetching data asynchronously,
  // it makes sense for it to return an Observable, right?
  getAllProducts(): Observable<Product[]> {
    return of(products);
  }
}
