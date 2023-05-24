import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottleComponent } from './bottle/bottle.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCatalogueComponent } from './products-catalogue/products-catalogue.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { HeadingComponent } from './heading/heading.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCartTotalComponent } from './product-cart-total/product-cart-total.component';

@NgModule({
  declarations: [
    AppComponent,
    BottleComponent,
    ProductsComponent,
    ProductsCatalogueComponent,
    ProductsCartComponent,
    HeadingComponent,
    ProductCardComponent,
    ProductCartTotalComponent,
  ],
  // TODO does it make sense to separate cart/catalogue into diff modules?
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
