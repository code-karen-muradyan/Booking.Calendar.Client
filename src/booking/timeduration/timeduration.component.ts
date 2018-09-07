import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Duration } from '../../shared/models/duration.model';
@Component({
  selector: 'app-timeduration',
  templateUrl: './timeduration.component.html',
  styleUrls: ['./timeduration.component.scss']
})
export class TimedurationComponent implements OnInit {
  @Output() selection_change = new EventEmitter();
  duration: Duration;
  constructor() { }

  ngOnInit() {
  }
  keys(): Array<string> {
    const keys = Object.values(Duration);
    return keys.slice(keys.length / 2);
}
  selectionchange(value: number) {
    if (this.selection_change) {
      this.selection_change.emit(value);
    }
  }

}
