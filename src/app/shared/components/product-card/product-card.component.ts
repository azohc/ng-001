import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { CatalogueService } from 'src/app/core/services/catalogue.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  product!: Product;

  @Input()
  variant: 'small' | 'large' = 'small';

  keywordFilter$ = this.catalogueService.keywordFilter$;

  get imageAltAttr() {
    return `${this.product.title}'s image`;
  }

  constructor(
    private cartService: CartService,
    private catalogueService: CatalogueService
  ) {}

  handleAddToCartClick() {
    this.cartService.addItemToCart(this.product);
  }
}
