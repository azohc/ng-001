import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottleComponent } from './bottle/bottle.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCatalogueComponent } from './products-catalogue/products-catalogue.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
    BottleComponent,
    ProductsComponent,
    ProductsCatalogueComponent,
    ProductsCartComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
