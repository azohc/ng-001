import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCatalogueComponent } from './products-catalogue.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCategoryTabsComponent } from './product-category-tabs/product-category-tabs.component';
import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';
import { FacetedTabComponent } from './tab/faceted-tab.component';

@NgModule({
  declarations: [
    ProductsCatalogueComponent,
    ProductCategoryTabsComponent,
    FacetedTabComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ProductsCatalogueComponent,
    ProductCategoryTabsComponent,
    HeadingComponent,
  ],
})
export class ProductsCatalogueModule {}
