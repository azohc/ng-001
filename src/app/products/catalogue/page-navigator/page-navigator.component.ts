import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription, range, toArray } from 'rxjs';
import { APP_SETTINGS } from 'src/app/app.module';
import { AppSettings } from 'src/app/app.settings';
import { CatalogueService } from 'src/app/core/services/catalogue.service';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.scss'],
})
export class PageNavigatorComponent
  implements OnInit, OnDestroy
{
  @Input()
  totalItems!: number;

  @Input()
  pageSize!: number;

  @Output()
  pageChange = new EventEmitter<number>();

  currentPage = 0;

  numPagesAdjacentToCurrent =
    this.settings.numPagesAdjacentToCurrent;

  subscription?: Subscription;

  get lastPage() {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  constructor(
    @Inject(APP_SETTINGS) private settings: AppSettings,
    private catalogueService: CatalogueService
  ) {}
  ngOnInit(): void {
    this.subscription =
      this.catalogueService.currentPage$.subscribe(
        (currentPage) => (this.currentPage = currentPage)
      );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  get previousPagesRange() {
    const start = Math.max(
      0,
      this.currentPage - this.numPagesAdjacentToCurrent
    );
    const end = this.currentPage;
    const count = end - start;
    return range(start, count).pipe(toArray());
  }

  get nextPagesRange() {
    const start = this.currentPage + 1;
    const end = Math.min(
      this.lastPage,
      this.currentPage + this.numPagesAdjacentToCurrent + 1
    );
    const count = end - start;
    return range(start, count).pipe(toArray());
  }

  onPageSelected(pageNumber: number) {
    this.pageChange.emit(pageNumber);
    this.currentPage = pageNumber;
  }
}
