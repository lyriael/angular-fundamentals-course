import {Component} from '@angular/core'

interface Nav {
  link: string,
  name: string,
  exact: boolean,
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav>
        <a
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: item.exact}"
        >
          Home
        </a>
        <router-outlet></router-outlet>
      </nav>
    </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    },
  ];
}
