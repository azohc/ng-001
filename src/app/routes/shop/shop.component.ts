import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { CatalogueService } from 'src/app/core/services/catalogue.service';
import { ProductDataService } from 'src/app/core/services/product-data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        query('#catalogueContainer > *', [
          style({ opacity: 0 }),
          stagger(
            444,
            animate('666ms', style({ opacity: 1 }))
          ),
        ]),
      ]),
    ]),
  ],
})
export class ShopComponent {
  loadingState$ = this.productDataService.loadingState$;
  loadingProgress$ = this.catalogueService.loadingProgress$;
  products$ = this.productDataService.products$;

  categoryFilter$ = this.catalogueService.categoryFilter$;
  keywordFilter$ = this.catalogueService.keywordFilter$;
  currentPage$ = this.catalogueService.currentPage$;

  productCategories$ =
    this.catalogueService.productCategories$;

  paginatedCatalogueProducts$ =
    this.catalogueService.paginatedCatalogueProducts$;

  catalogueProducts$ =
    this.catalogueService.catalogueProducts$;

  pageSize = this.catalogueService.pageSize;

  emptyMap = new Map<string, number>();

  constructor(
    private productDataService: ProductDataService,
    private catalogueService: CatalogueService
  ) {}

  setCategoryFilter(category: string) {
    this.catalogueService.setCategoryFilter(category);
  }

  setKeywordFilter(query: string) {
    this.catalogueService.setKeywordFilter(query);
  }

  setCurrentPage(pageNumber: number) {
    this.catalogueService.setCurrentPage(pageNumber);
  }

  fetchProducts() {
    this.productDataService.fetchProducts();
  }
}
