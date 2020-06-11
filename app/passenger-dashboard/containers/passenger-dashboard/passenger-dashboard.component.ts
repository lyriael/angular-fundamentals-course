import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers"
      >
      </passenger-count>
      <passenger-detail
      *ngFor="let passenger of passengers;"
      [detail]="passenger"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)"
      >
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];
  constructor() {}
  ngOnInit(): void {
    console.log('ngOnInit');
    this.passengers = [
      {
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null,
      }, {
        id: 2,
        fullname:  'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{name: 'Ted', age: 12}, {name: 'Mug', age: 17}],
      }, {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null,
      }, {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: [{name: 'Funa', age: 12}, {name: 'Marc', age: 17}],
      }, {
        id: 5,
        fullname: 'Caith',
        checkedIn: false,
        checkInDate: null,
        children: null,
      },
    ]
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event); // object assign merges
      }
      return passenger;
    });
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }
}
