import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import * as $ from 'jquery';
import { WiesoComponent } from './wieso/wieso.component';
import { WieComponent } from './wie/wie.component';
import { WasComponent } from './was/was.component';
import { WerComponent } from './wer/wer.component';
import { CustomerBoxComponent } from './wieso/customer-box/customer-box.component';
import { MapComponent } from './map/map.component';
import {AgmCoreModule} from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Wie2CarouselComponent } from './wie2-carousel/wie2-carousel.component';
import { Wer2CarouselComponent } from './wer2-carousel/wer2-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    WiesoComponent,
    WieComponent,
    WasComponent,
    WerComponent,
    CustomerBoxComponent,
    MapComponent,
    Wie2CarouselComponent,
    Wer2CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyDDR94AIMmSbfaPgqtXwtvV9PxrbozvnuQ"
    }),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
