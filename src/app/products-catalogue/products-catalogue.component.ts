import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-catalogue',
  templateUrl: './products-catalogue.component.html',
  styleUrls: ['./products-catalogue.component.scss'],
})
export class ProductsCatalogueComponent {
  @Input()
  products!: Observable<Product[]>;

  @Output()
  addedToCart = new EventEmitter<number>();

  bubbleAddedToCartEvent(id: number) {
    this.addedToCart.emit(id);
  }
}
