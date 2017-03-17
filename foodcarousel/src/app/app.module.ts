import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FoodcheckboxComponent } from './foodcheckbox/foodcheckbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FoodcheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, CarouselComponent]
})
export class AppModule { }
