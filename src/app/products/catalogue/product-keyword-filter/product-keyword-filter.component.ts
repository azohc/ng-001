import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-product-keyword-filter',
  templateUrl: './product-keyword-filter.component.html',
  styleUrls: ['./product-keyword-filter.component.scss'],
})
export class ProductKeywordFilterComponent {
  @Input()
  selectedCategory?: string;

  // TODO switch out for subject?
  @Output()
  queryChanged = new EventEmitter<string>();

  get placeholder() {
    if (!this.selectedCategory) return 'FILTER PRODUCTS';
    return `FILTER ${this.selectedCategory.toUpperCase()} PRODUCTS`;
  }

  onChange(query: string) {
    console.log(query);
    this.queryChanged.emit(query);
  }
}
