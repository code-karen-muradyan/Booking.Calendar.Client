import { Component, OnInit , OnDestroy, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit , OnDestroy {
  @Output() selection_change = new EventEmitter();
  @Input() duration;
  times = [];
  delta = 0.25;
  durationsplits: number[] = [];
  durationsplit = 54;
  a = 8;
  b = 21;
  val = 0;

  constructor() {
    this.val = this.a;
  }

  ngOnInit() {
    this.delta = this.duration;
    this.durationsplit = (21 - 8) / this.duration + 2;
    this.durationsplit = Math.floor(this.durationsplit);
    this.durationsplits = [];
    this.val = this.a;
    for (let _i = 1; _i < this.durationsplit; _i++) {
      this.durationsplits.push(_i);
  }
}
ngOnDestroy(): void {
  this.val = this.a;
}

displeytime(n: number): string {
  if (this.val > this.b) {
    this.val = this.a;
    this.times = [];
  }
  const q = ((this.val - Math.floor(this.val)) / this.delta) * (60 * this.delta);
  const display = (Math.floor(this.val) + ':' + this.formated(q));
  this.val += this.delta;
  this.times.push(display);
  return display;
}
formated(n: number): string {
if (n.toString().length <= 1) {
  return n + '0';
} else { return n.toString(); }
}

selectionchange(value: any) {
  if (this.selection_change) {
    this.selection_change.emit(this.times[value - 1] + ',' + this.times[value]);
  }
}
}
