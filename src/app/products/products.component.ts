import { Component, Inject } from '@angular/core';
import { combineLatest, map, tap } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { CatalogueService } from '../core/services/catalogue.service';
import { APP_SETTINGS } from '../app.module';
import { AppSettings } from '../app.settings';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products$ = this.productsService.products$;

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
    private productsService: ProductService,
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
}
