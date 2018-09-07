import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../shared/models/appointment.model';
import { IRoom } from '../../shared/models/room.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-apponitment',
  templateUrl: './apponitment.component.html',
  styleUrls: ['./apponitment.component.scss']
})
export class ApponitmentComponent implements OnInit {
  room: IRoom;
  state: state = state.st_1;
  date: Date;
  time: string;
  duration = 0.25;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  }
  timedurationchagne(duration: number) {
    this.state = state.st_2;
    this.duration = 1 / (60 / duration);
  }
  calendarchange(date: any) {
    this.date = date;
    this.state = state.st_3;
  }
  timelinechange(time: string ) {
    this.state = state.st_4;
    this.time = time;
  }
  roomchange(room: any) {
    this.state = state.st_1;
    this.room = room;
  }
  createAppointment(app: Appointment) {
    app.categoria = this.room.name;
    app.classEvent = 'event';
    app.to = 'demo@gmail.com';
    app.date = this.date.toISOString();
    app.startTime = this.time.split(',')[0];
    app.endTime = this.time.split(',')[1];
    this.bookingService.createapponitment(app).subscribe(_x => {
      this.state = state.st_1;
    });
  }
}

export enum state {
  st_1 = 1,
  st_2 = 2,
  st_3 = 3,
  st_4 = 4
}
