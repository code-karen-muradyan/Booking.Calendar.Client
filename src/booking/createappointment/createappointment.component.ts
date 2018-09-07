import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../../shared/models/appointment.model';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-createappointment',
  templateUrl: './createappointment.component.html',
  styleUrls: ['./createappointment.component.scss']
})
export class CreateappointmentComponent implements OnInit {
  @Output() createcommand = new EventEmitter();
  current: Appointment;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.current = new Appointment();
  }

  create() {
    if (this.createcommand) {
      this.createcommand.emit(this.current);
    }
  }

}
