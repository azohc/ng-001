import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsCatalogueModule } from '../products/catalogue/products-catalogue.module';
import { ProductsCartModule } from '../products/cart/products-cart.module';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';

const routes: Routes = [
  {
    path: 'success',
    // TODO deny access that isn't from /checkout somehow?
    component: CheckoutSuccessComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        // TODO deny access if cart is empty?
        path: 'checkout',
        loadComponent: () =>
          import('./checkout/checkout.component').then(
            (module) => module.CheckoutComponent
          ),
      },
      { path: '**', redirectTo: 'shop' },
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    ShopComponent,
    CheckoutSuccessComponent,
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
