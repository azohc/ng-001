import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCatalogueModule } from './products/catalogue/products-catalogue.module';
import { ProductsCartModule } from './products/cart/products-cart.module';
import { AppSettings, appSettings } from './app.settings';
import { ProductService } from './core/services/product-data.service';

export const APP_SETTINGS = new InjectionToken<AppSettings>(
  'app.settings'
);

export function productDataServiceFactory(
  settings: AppSettings
): ProductService {
  // TODO fix this and test it
  if (settings.language === 'fr') {
    // return new FrenchProductService(appSettings);
  }
  return new ProductService(appSettings);
}

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [
    BrowserModule,
    ProductsCatalogueModule,
    ProductsCartModule,
  ],
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings },
    {
      provide: ProductService,
      useFactory: productDataServiceFactory,
      deps: [APP_SETTINGS],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
