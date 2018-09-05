import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookingModule } from '../booking/booking.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BookingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
