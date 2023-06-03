import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { range } from 'lodash-es';
import { Subscription } from 'rxjs';
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

  nrPrevNextPages = 2;

  subscription?: Subscription;

  get lastPage() {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  constructor(private catalogueService: CatalogueService) {}
  ngOnInit(): void {
    this.subscription =
      this.catalogueService.currentPage$.subscribe(
        (currentPage) => (this.currentPage = currentPage)
      );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // TODO replace with observable ? could ditch lodash and just use RxJS
  get previousPagesRange() {
    const start = Math.max(
      0,
      this.currentPage - this.nrPrevNextPages
    );
    const end = this.currentPage;
    return range(start, end);
  }

  get nextPagesRange() {
    const start = this.currentPage + 1;
    const end = Math.min(
      this.lastPage,
      this.currentPage + this.nrPrevNextPages + 1
    );
    return range(start, end);
  }

  onPageSelected(pageNumber: number) {
    this.pageChange.emit(pageNumber);
    this.currentPage = pageNumber;
  }
}
