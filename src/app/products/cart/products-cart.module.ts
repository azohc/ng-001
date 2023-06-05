import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCartComponent } from './products-cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCartTotalComponent } from './product-cart-total/product-cart-total.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    ProductsCartComponent,
    ProductCartTotalComponent,
  ],
  imports: [AppRoutingModule, CommonModule, SharedModule],
  exports: [ProductsCartComponent],
})
export class ProductsCartModule {}
