import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { range } from 'lodash-es';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.scss'],
})
export class PageNavigatorComponent {
  @Input()
  totalItems!: number;

  @Input()
  pageSize!: number;

  @Output()
  pageChange = new EventEmitter<number>();

  /// Local state
  currentPage = 0;
  get lastPage() {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  nrPrevNextPages = 2;

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
    console.log('selected page ', pageNumber);
    console.log('TODO implement');
  }
}
