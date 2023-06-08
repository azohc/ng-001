import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './components/heading/heading.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ButtonComponent } from './components/button/button.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    HeadingComponent,
    ProductCardComponent,
    ButtonComponent,
    HighlightDirective,
    SpinnerComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeadingComponent,
    ProductCardComponent,
    ButtonComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
