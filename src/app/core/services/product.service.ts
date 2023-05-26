import { Injectable } from '@angular/core';
import products from '../../../assets/products.json';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$: Observable<Product[]> = of(products);
}
