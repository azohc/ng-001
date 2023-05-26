import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottleComponent } from './bottle/bottle.component';
import { HeadingComponent } from './heading/heading.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProductCardComponent } from './product-card/product-card.component';

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
