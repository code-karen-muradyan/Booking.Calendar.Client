import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookingService } from '../booking.service';
import { IRoom } from '../../shared/models/room.model';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  rooms: IRoom[] = [];
  selectedvalue: IRoom;
  @Output() selection_change = new EventEmitter();
  constructor(private service: BookingService) { }

  ngOnInit() {
    this.service.getRooms().subscribe(x => {
       this.rooms = x;
      }
    );
  }

  selectionchange(value: any) {
    if (this.selection_change) {
      this.selection_change.emit(this.selectedvalue);
    }
  }
}
