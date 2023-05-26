import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartTotalComponent } from './product-cart-total.component';

describe('ProductCartTotalComponent', () => {
  let component: ProductCartTotalComponent;
  let fixture: ComponentFixture<ProductCartTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
