import { Inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  concat,
  concatMap,
  map,
  of,
  tap,
  timer,
} from 'rxjs';
import { ProductDataService } from './product-data.service';
import { AppSettings } from 'src/app/app.settings';
import { APP_SETTINGS } from 'src/app/app.module';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private categoryFilterSubject = new BehaviorSubject('');
  categoryFilter$ =
    this.categoryFilterSubject.asObservable();

  private keywordFilterSubject = new BehaviorSubject('');
  keywordFilter$ = this.keywordFilterSubject.asObservable();

  pageSize = this.settings.pageSize;

  private currentPageSubject = new BehaviorSubject(0);
  currentPage$ = this.currentPageSubject.asObservable();

  products$ = this.productService.products$;

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

  loadingProgress$ = this.productService.loadingState$.pipe(
    concatMap((state) =>
      state === 'loaded'
        ? concat(
            of('showCompleted'),
            timer(111 + Math.random() * 666).pipe(
              map(() => 'hide')
            )
          )
        : of('showSpinner')
    )
  );

  constructor(
    private productService: ProductDataService,
    @Inject(APP_SETTINGS) private settings: AppSettings
  ) {}

  setCategoryFilter(category: string) {
    this.categoryFilterSubject.next(category);
  }

  setKeywordFilter(query: string) {
    this.keywordFilterSubject.next(query);
  }

  setCurrentPage(pageNumber: number) {
    this.currentPageSubject.next(pageNumber);
  }
}
