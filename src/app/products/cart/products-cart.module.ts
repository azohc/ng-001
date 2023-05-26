import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCartComponent } from './products-cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCartTotalComponent } from './product-cart-total/product-cart-total.component';

@NgModule({
  declarations: [ProductsCartComponent, ProductCartTotalComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductsCartComponent],
})
export class ProductsCartModule {}
