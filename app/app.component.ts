import {Component} from '@angular/core'

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3> Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname}}
          <p> {{ passenger | json }}</p>
          <div class="date">
            Check in date:
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'y MMMM d'| uppercase) : 'Not checked in' }}
          </div>
        </li>
      </ul>

    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1490742000000
    }, {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1490742000000
    }, {
      id: 5,
      fullname: 'Caith',
      checkedIn: false,
      checkInDate: null
    },
  ]
}
