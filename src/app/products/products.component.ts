import { Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { CatalogueService } from '../catalogue.service';

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

  catalogueProducts$ = combineLatest([
    this.products$,
    this.categoryFilter$,
    this.keywordFilter$,
  ]).pipe(
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

  emptyMap = new Map<string, number>();

  constructor(
    private productsService: ProductService,
    private catalogueService: CatalogueService
  ) {}

  setCategoryFilter(category: string) {
    this.catalogueService.setCategoryFilter(category);
  }

  setKeywordFilter(query: string) {
    this.catalogueService.setKeywordFilter(query);
  }
}
