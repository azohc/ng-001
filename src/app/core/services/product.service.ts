import { Inject, Injectable } from '@angular/core';
// import products from '../../../assets/products.json';
import { Observable, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Product } from '../models/product.model';
import { APP_SETTINGS } from 'src/app/app.module';
import { AppSettings } from 'src/app/app.settings';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // TODO replace this service with ProductDataService and FrenchProductDataService
  productsURL = this.settings.dataSourceURL.replace(
    '$LANG$',
    this.settings.language
  );

  products$: Observable<Product[]> = ajax
    .getJSON(this.productsURL)
    .pipe(
      map((response) => response as unknown as Product[])
    );

  constructor(
    @Inject(APP_SETTINGS) private settings: AppSettings
  ) {}
}
