import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppSettings, appSettings } from './app.settings';
import { RoutingModule } from './routes/routing.module';

export const APP_SETTINGS = new InjectionToken<AppSettings>(
  'app.settings'
);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutingModule],
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
