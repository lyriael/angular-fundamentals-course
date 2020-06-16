import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'passengers', pathMatch: 'full'},
  // {path: '', redirectTo: 'passengers', pathMatch: 'full'}, // use a redirect
  {path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, { useHash: true }), // use Hash in URL
    // Custom Modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
