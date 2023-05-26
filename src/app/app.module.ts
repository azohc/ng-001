import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCatalogueModule } from './products/catalogue/products-catalogue.module';
import { ProductsCartModule } from './products/cart/products-cart.module';

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, ProductsCatalogueModule, ProductsCartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
