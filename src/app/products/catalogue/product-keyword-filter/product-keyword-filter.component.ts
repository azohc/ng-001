import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Subscription,
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
  implements AfterViewInit, OnDestroy
{
  @ViewChild('query')
  queryInput?: ElementRef;

  @Input()
  selectedCategory?: string;

  @Output()
  queryChanged = new EventEmitter<string>();

  subscription = new Subscription();

  ngAfterViewInit() {
    if (!this.queryInput) return;
    this.subscription = fromEvent(
      this.queryInput.nativeElement,
      'keyup'
    )
      .pipe(
        filter(
          // TODO why cant I type this event as KeyboardEvent?
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get placeholder() {
    if (!this.selectedCategory) return 'FILTER PRODUCTS';
    return `FILTER ${this.selectedCategory.toUpperCase()} PRODUCTS`;
  }
}
