import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileProdComponent } from './shared/component/mobile-prod/mobile-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileProdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
