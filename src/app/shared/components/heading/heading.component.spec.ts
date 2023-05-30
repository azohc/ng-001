import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { HeadingComponent } from './heading.component';

describe('HeadingComponent', () => {
  let component: HeadingComponent;
  let fixture: ComponentFixture<HeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be large by default', () => {
    expect(component.size).toBe('large');
  });

  it('should be styled depending on its size', () => {
    const el = fixture.nativeElement as HTMLSpanElement;

    expect(el.querySelector('span.h__large')).toBeTruthy();

    fixture.componentInstance.size = 'medium';
    fixture.detectChanges();

    expect(component.size).toBe('medium');
    expect(el.querySelector('span.h__medium')).toBeTruthy();
  });
});
