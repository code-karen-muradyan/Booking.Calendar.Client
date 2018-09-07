import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  date: Date = new Date();
  @Output() selection_change = new EventEmitter();
  settings = {
    bigBanner: true,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false
  };
  currentDay: number;

  constructor() { }

  ngOnInit() {
  }
  selectionchange(value: any) {
    if (this.selection_change) {
      this.selection_change.emit(value);
    }
  }
}
