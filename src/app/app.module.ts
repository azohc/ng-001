import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCartTotalComponent } from './product-cart-total/product-cart-total.component';
import { ProductsCatalogueModule } from './products-catalogue/products-catalogue.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsCartComponent,
    ProductCardComponent,
    ProductCartTotalComponent,
  ],
  // TODO does it make sense to separate cart/catalogue into diff modules?
  imports: [BrowserModule, ProductsCatalogueModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
