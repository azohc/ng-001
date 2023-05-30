import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryTabsComponent } from './product-category-tabs.component';

describe('ProductCategoryTabsComponent', () => {
  let component: ProductCategoryTabsComponent;
  let fixture: ComponentFixture<ProductCategoryTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryTabsComponent]
    });
    fixture = TestBed.createComponent(ProductCategoryTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
