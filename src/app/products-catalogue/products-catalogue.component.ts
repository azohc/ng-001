import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-catalogue',
  templateUrl: './products-catalogue.component.html',
  styleUrls: ['./products-catalogue.component.scss'],
})
export class ProductsCatalogueComponent implements OnInit {
  @Input()
  products!: Observable<Product[]>;

  @Output()
  addedToCart = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  bubbleAddedToCartEvent(id: number) {
    this.addedToCart.emit(id);
  }
}
