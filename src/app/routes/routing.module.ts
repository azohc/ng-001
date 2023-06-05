import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsCatalogueModule } from '../products/catalogue/products-catalogue.module';
import { ProductsCartModule } from '../products/cart/products-cart.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      { path: '**', redirectTo: 'shop' },
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    ShopComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ProductsCatalogueModule,
    ProductsCartModule,
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
