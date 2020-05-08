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
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"
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

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }
}
