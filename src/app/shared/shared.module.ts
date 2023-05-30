import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottleComponent } from './components/bottle/bottle.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    BottleComponent,
    HeadingComponent,
    SpinnerComponent,
    ProductCardComponent,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [HeadingComponent, ProductCardComponent],
})
export class SharedModule {}
