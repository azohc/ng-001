import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products/types';

@Component({
  selector: 'app-products-catalogue',
  templateUrl: './products-catalogue.component.html',
  styleUrls: ['./products-catalogue.component.scss'],
})
export class ProductsCatalogueComponent {
  @Input()
  products: Product[] = [];

  @Output()
  addedToCart = new EventEmitter<number>();

  bubbleAddedToCartEvent(id: number) {
    this.addedToCart.emit(id);
  }
}
