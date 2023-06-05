import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProductsCartModule } from './products/cart/products-cart.module';
import { ProductsCatalogueModule } from './products/catalogue/products-catalogue.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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
export class AppRoutingModule {}
