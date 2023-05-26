import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottleComponent } from './components/bottle/bottle.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    BottleComponent,
    HeadingComponent,
    SpinnerComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule],
  exports: [HeadingComponent, ProductCardComponent],
})
export class SharedModule {}
