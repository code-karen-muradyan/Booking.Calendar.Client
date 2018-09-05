import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoomComponent } from './room/room.component';
import { ApponitmentComponent } from './apponitment/apponitment.component';
import { TimedurationComponent } from './timeduration/timeduration.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CreateappointmentComponent } from './createappointment/createappointment.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [RoomComponent,
                   ApponitmentComponent,
                   TimedurationComponent,
                   CalendarComponent,
                   TimelineComponent,
                   CreateappointmentComponent],
    exports: [
        ApponitmentComponent
    ],
    providers: [
    ]
})
export class BookingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ]
        };
    }
}
