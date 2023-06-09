import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-product-category-tabs',
  templateUrl: './product-category-tabs.component.html',
  styleUrls: ['./product-category-tabs.component.scss'],
})
export class ProductCategoryTabsComponent {
  @Input()
  productCategories!: Map<string, number>;

  @Output()
  tabClicked = new EventEmitter<string>();

  activeTab?: string;

  emitTabClicked(tab?: string) {
    this.tabClicked.emit(tab);
    this.activeTab = tab;
  }
}
