import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button
      (click)=handleClick()
      >Reset Name</button>
      <input
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
      >
      <input
        type="text"
        [(ngModel)]="name"
      >
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = "Yi'Gweira";

  handleClick() {
    this.name = "Yi'Gweira";
  }

  handleChange(value: string) {
    this.name = value;
  }
}
