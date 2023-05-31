import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  distinctUntilChanged,
  filter,
  fromEvent,
  throttleTime,
} from 'rxjs';

@Component({
  selector: 'app-product-keyword-filter',
  templateUrl: './product-keyword-filter.component.html',
  styleUrls: ['./product-keyword-filter.component.scss'],
})
export class ProductKeywordFilterComponent
  implements AfterViewInit
{
  @ViewChild('query')
  queryInput?: ElementRef;

  @Input()
  selectedCategory?: string;

  @Output()
  queryChanged = new EventEmitter<string>();

  ngAfterViewInit() {
    if (!this.queryInput) return;
    fromEvent(this.queryInput.nativeElement, 'keyup')
      .pipe(
        filter(
          (event: any) => event.target.value.length > 2
        ),
        throttleTime(500),
        distinctUntilChanged()
      )
      .subscribe(() => {
        if (!this.queryInput) return;
        this.queryChanged.emit(
          this.queryInput.nativeElement.value
        );
      });
  }

  get placeholder() {
    if (!this.selectedCategory) return 'FILTER PRODUCTS';
    return `FILTER ${this.selectedCategory.toUpperCase()} PRODUCTS`;
  }
}
