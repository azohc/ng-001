import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { FacetedTabComponent } from './faceted-tab.component';

describe('TabComponent', () => {
  let component: FacetedTabComponent;
  let fixture: ComponentFixture<FacetedTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacetedTabComponent],
    });
    fixture = TestBed.createComponent(FacetedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
