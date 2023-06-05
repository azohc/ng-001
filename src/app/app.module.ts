import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCatalogueModule } from './products/catalogue/products-catalogue.module';
import { ProductsCartModule } from './products/cart/products-cart.module';
import { AppSettings, appSettings } from './app.settings';

export const APP_SETTINGS = new InjectionToken<AppSettings>(
  'app.settings'
);

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [
    BrowserModule,
    ProductsCatalogueModule,
    ProductsCartModule,
  ],
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
