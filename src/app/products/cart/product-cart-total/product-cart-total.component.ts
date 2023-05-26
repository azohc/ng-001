import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-cart-total',
  templateUrl: './product-cart-total.component.html',
})
export class ProductCartTotalComponent {
  @Input()
  total = 0;
}
