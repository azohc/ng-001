import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart-total',
  templateUrl: './product-cart-total.component.html',
})
export class ProductCartTotalComponent implements OnInit {
  @Input()
  total: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
