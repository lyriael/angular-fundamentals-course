import {Passenger} from "./models/passenger.interface";

export class PassengerDashboardService {
  constructor() {
  }

  getPassengers(): Passenger[] {
    return [
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

}
