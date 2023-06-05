import { InjectionToken, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppSettings, appSettings } from './app.settings';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

export const APP_SETTINGS = new InjectionToken<AppSettings>(
  'app.settings'
);

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule],
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
