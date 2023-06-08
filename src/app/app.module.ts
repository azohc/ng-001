import {
  APP_INITIALIZER,
  InjectionToken,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppSettings, appSettings } from './app.settings';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routes/routing.module';
import { ProductDataService } from './core/services/product-data.service';

export const APP_SETTINGS = new InjectionToken<AppSettings>(
  'app.settings'
);

const appInitFactory = (
  productDataService: ProductDataService
) => {
  return () =>
    Promise.resolve(productDataService.fetchProducts());
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RoutingModule],
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitFactory,
      deps: [ProductDataService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
