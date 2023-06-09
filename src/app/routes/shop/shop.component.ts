import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { map } from 'rxjs';
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
  spinnerVisibility$ =
    this.catalogueService.spinnerVisibility$;
  products$ = this.productDataService.products$;

  categoryFilter$ = this.catalogueService.categoryFilter$;

  keywordFilter$ = this.catalogueService.keywordFilter$;

  currentPage$ = this.catalogueService.currentPage$;
  pageSize = this.catalogueService.pageSize;

  productCategories$ = this.catalogueService.categories$;

  paginatedCatalogueProducts$ =
    this.catalogueService.paginatedCatalogueProducts$;

  numFilteredProducts$ =
    this.catalogueService.filteredProducts$.pipe(
      map((products) => products.length)
    );

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

  // ignore me ^_^
  emptyMap = new Map<string, number>();
}
