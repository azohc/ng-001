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
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
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

  get placeholder() {
    if (!this.selectedCategory) return 'FILTER PRODUCTS';
    return `FILTER ${this.selectedCategory.toUpperCase()} PRODUCTS`;
  }

  subscription = new Subscription();

  ngAfterViewInit() {
    if (!this.queryInput) return;
    this.subscription = fromEvent<KeyboardEvent>(
      this.queryInput.nativeElement,
      'keyup'
    )
      .pipe(
        map(
          (event) => (<HTMLInputElement>event.target).value
        ),
        filter(
          (value: string) =>
            value.length === 0 || value.length > 2
        ),
        debounceTime(200),
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
}
