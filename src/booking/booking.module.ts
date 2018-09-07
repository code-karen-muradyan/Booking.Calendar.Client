import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoomComponent } from './room/room.component';
import { ApponitmentComponent } from './apponitment/apponitment.component';
import { TimedurationComponent } from './timeduration/timeduration.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CreateappointmentComponent } from './createappointment/createappointment.component';
import { BookingService } from './booking.service';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    imports: [
        BrowserModule,
        SharedModule.forRoot()
    ],
    declarations: [RoomComponent,
                   ApponitmentComponent,
                   TimedurationComponent,
                   CalendarComponent,
                   TimelineComponent,
                   CreateappointmentComponent],
    exports: [

    ],
    providers: [
        BookingService
    ]
})
export class BookingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BookingModule,
            providers: [
            ]
        };
    }
}
