import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

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

  justAddedToCart = false;

  get imageAltAttr() {
    return `${this.product.title}'s image`;
  }

  handleAddToCartClick() {
    this.addedToCart.emit(this.product.id);
    this.justAddedToCart = true;
    setTimeout(() => (this.justAddedToCart = false), 1000);
  }
}
