import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../products/types';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  // TODO NG UPDATE to use required
  @Input()
  product!: Product;

  @Input()
  variant: 'small' | 'large' = 'small';

  @Output()
  addedToCart = new EventEmitter<number>();

  get imageAltAttr() {
    return `${this.product.title}'s image`;
  }

  emitAddedToCartEvent() {
    this.addedToCart.emit(this.product.id);
  }
}
