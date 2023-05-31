import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-keyword-filter',
  templateUrl: './product-keyword-filter.component.html',
  styleUrls: ['./product-keyword-filter.component.scss'],
})
export class ProductKeywordFilterComponent {
  @Input()
  selectedCategory?: string;

  get placeholder() {
    if (!this.selectedCategory) return 'FILTER PRODUCTS';
    return `FILTER ${this.selectedCategory.toUpperCase()} PRODUCTS`;
  }
}
