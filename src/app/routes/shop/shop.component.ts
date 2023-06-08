import { Component, Inject } from '@angular/core';
import { map, combineLatest, tap } from 'rxjs';
import { APP_SETTINGS } from 'src/app/app.module';
import { AppSettings } from 'src/app/app.settings';
import { CatalogueService } from 'src/app/core/services/catalogue.service';
import { ProductDataService } from 'src/app/core/services/product-data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  loadingState$ = this.productDataService.loadingState$;
  products$ = this.productDataService.products$;

  productCategories$ = this.products$.pipe(
    map((products) => {
      const productCategoryMap = new Map<string, number>();
      products.forEach((product) => {
        const { category } = product;
        const numProducts =
          productCategoryMap.get(category);
        productCategoryMap.set(
          category,
          numProducts ? numProducts + 1 : 1
        );
      });
      return productCategoryMap;
    })
  );

  categoryFilter$ = this.catalogueService.categoryFilter$;
  keywordFilter$ = this.catalogueService.keywordFilter$;
  currentPage$ = this.catalogueService.currentPage$;

  catalogueProducts$ = combineLatest([
    this.products$,
    this.categoryFilter$,
    this.keywordFilter$,
  ]).pipe(
    tap(() => this.setCurrentPage(0)),
    map(([products, categoryFilter, keywordFilter]) =>
      products.filter((product) => {
        let condition = true;
        if (categoryFilter) {
          condition = product.category === categoryFilter;
        }
        if (condition && keywordFilter) {
          condition = product.title
            .toLowerCase()
            .includes(keywordFilter.toLowerCase());
        }
        return condition;
      })
    )
  );

  paginatedCatalogueProducts$ = combineLatest([
    this.catalogueProducts$,
    this.currentPage$,
  ]).pipe(
    map(([filteredProducts, currentPage]) =>
      filteredProducts.slice(
        currentPage * this.pageSize,
        (currentPage + 1) * this.pageSize
      )
    )
  );

  pageSize = this.settings.pageSize;

  emptyMap = new Map<string, number>();

  constructor(
    @Inject(APP_SETTINGS) private settings: AppSettings,
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
