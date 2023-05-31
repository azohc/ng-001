import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './components/heading/heading.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    HeadingComponent,
    ProductCardComponent,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [HeadingComponent, ProductCardComponent],
})
export class SharedModule {}
