import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsCatalogueModule } from '../products/catalogue/products-catalogue.module';
import { ProductsCartModule } from '../products/cart/products-cart.module';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { checkoutSuccessGuard } from './checkout-success/checkout-success.guard';
import { checkoutGuard } from './checkout/checkout.guard';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'success',
    component: CheckoutSuccessComponent,
    canActivate: [checkoutSuccessGuard],
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
        path: 'checkout',
        canActivate: [checkoutGuard],
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
    SharedModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
