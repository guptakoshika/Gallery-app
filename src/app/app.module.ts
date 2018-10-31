import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ImageFilter } from './filter images/ImageFilter.pipe';
import { Imageproviders } from './filter images/Imageproviders';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ImageFilter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Imageproviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
