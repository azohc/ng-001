import { Component, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { CatalogueService } from 'src/app/core/services/catalogue.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnDestroy {
  @Input()
  product!: Product;

  @Input()
  variant: 'small' | 'large' = 'small';

  timeoutID?: number;

  justAddedToCart = false;

  keywordFilter$ = this.catalogueService.keywordFilter$;

  get imageAltAttr() {
    return `${this.product.title}'s image`;
  }

  constructor(
    private cartService: CartService,
    private catalogueService: CatalogueService
  ) {}

  ngOnDestroy(): void {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
  }

  handleAddToCartClick() {
    this.cartService.addItemToCart(this.product);
  }
}
