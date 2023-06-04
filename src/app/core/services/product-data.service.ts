import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Product } from '../models/product.model';
import { APP_SETTINGS } from 'src/app/app.module';
import { AppSettings } from 'src/app/app.settings';

export interface ProductDataService {
  products$: Observable<Product[]>;
}

@Injectable()
export class ProductService implements ProductDataService {
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

@Injectable()
export class FrenchProductService
  implements ProductDataService
{
  productsURL = this.settings.dataSourceURL.replace(
    '$LANG$',
    'fr'
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
