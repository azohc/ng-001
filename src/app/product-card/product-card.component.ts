import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products/types';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!: Product;

  @Input()
  variant: 'small' | 'large' = 'small';

  get imageAltAttr() {
    return `${this.product.title}'s image`;
  }

  constructor() {}

  ngOnInit(): void {}
}
