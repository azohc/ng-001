import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { ProductKeywordFilterComponent } from './product-keyword-filter.component';

describe('ProductKeywordFilterComponent', () => {
  let component: ProductKeywordFilterComponent;
  let fixture: ComponentFixture<ProductKeywordFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductKeywordFilterComponent],
    });
    fixture = TestBed.createComponent(
      ProductKeywordFilterComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
