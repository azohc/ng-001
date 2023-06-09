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

  categories$ = this.products$.pipe(
    map((products) => {
      const itemCountByCategory = new Map<string, number>();
      products.forEach((product) => {
        const { category } = product;
        const n = itemCountByCategory.get(category);
        itemCountByCategory.set(category, n ? n + 1 : 1);
      });
      return itemCountByCategory;
    })
  );

  filteredProducts$ = combineLatest([
    this.products$,
    this.categoryFilter$,
    this.keywordFilter$,
  ]).pipe(
    tap(() => this.setCurrentPage(0)),
    map(([products, categoryFilter, keywordFilter]) =>
      products.filter((product) => {
        let cond = true;
        if (categoryFilter) {
          cond = product.category === categoryFilter;
        }
        if (cond && keywordFilter) {
          cond = product.title
            .toLowerCase()
            .includes(keywordFilter.toLowerCase());
        }
        return cond;
      })
    )
  );

  paginatedCatalogueProducts$ = combineLatest([
    this.filteredProducts$,
    this.currentPage$,
  ]).pipe(
    map(([filteredProducts, currentPage]) =>
      filteredProducts.slice(
        currentPage * this.pageSize,
        (currentPage + 1) * this.pageSize
      )
    )
  );

  spinnerVisibility$ =
    this.productService.loadingState$.pipe(
      concatMap((state) =>
        state === 'loading'
          ? of('showSpinner')
          : concat(
              of('showCompleted'),
              timer(111 + Math.random() * 555).pipe(
                map(() => 'hide')
              )
            )
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
