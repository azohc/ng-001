import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCatalogueComponent } from './products-catalogue.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsCatalogueComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductsCatalogueComponent],
})
export class ProductsCatalogueModule {}
