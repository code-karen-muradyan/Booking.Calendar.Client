import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { BookingModule} from '../booking/booking.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule.forRoot(),
    BookingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
