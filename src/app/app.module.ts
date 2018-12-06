import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as $ from 'jquery';
import { WiesoComponent } from './wieso/wieso.component';
import { WieComponent } from './wie/wie.component';
import { WasComponent } from './was/was.component';
import { WerComponent } from './wer/wer.component';
import { CustomerBoxComponent } from './wieso/customer-box/customer-box.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    WiesoComponent,
    WieComponent,
    WasComponent,
    WerComponent,
    CustomerBoxComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
