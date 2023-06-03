import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCatalogueComponent } from './products-catalogue.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCategoryTabsComponent } from './product-category-tabs/product-category-tabs.component';
import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';
import { FacetedTabComponent } from './faceted-tab/faceted-tab.component';
import { ProductKeywordFilterComponent } from './product-keyword-filter/product-keyword-filter.component';
import { PageNavigatorComponent } from './page-navigator/page-navigator.component';

@NgModule({
  declarations: [
    ProductsCatalogueComponent,
    ProductCategoryTabsComponent,
    FacetedTabComponent,
    ProductKeywordFilterComponent,
    PageNavigatorComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ProductsCatalogueComponent,
    ProductCategoryTabsComponent,
    HeadingComponent,
    ProductKeywordFilterComponent,
    PageNavigatorComponent,
  ],
})
export class ProductsCatalogueModule {}
