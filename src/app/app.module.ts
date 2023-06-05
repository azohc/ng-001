import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppSettings, appSettings } from './app.settings';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductsCatalogueModule } from './products/catalogue/products-catalogue.module';
import { ProductsCartModule } from './products/cart/products-cart.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const APP_SETTINGS = new InjectionToken<AppSettings>(
  'app.settings'
);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ShopComponent,
    CheckoutComponent,
  ],
  imports: [
    AppRoutingModule,
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
