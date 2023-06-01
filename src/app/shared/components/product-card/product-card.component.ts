import { Component, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnDestroy {
  // TODO NG UPDATE to use required
  @Input()
  product!: Product;

  @Input()
  variant: 'small' | 'large' = 'small';

  timeoutID?: number;

  justAddedToCart = false;

  get imageAltAttr() {
    return `${this.product.title}'s image`;
  }

  constructor(private cartService: CartService) {}

  ngOnDestroy(): void {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
  }

  handleAddToCartClick() {
    this.cartService.addItemToCart(this.product);
  }
}
