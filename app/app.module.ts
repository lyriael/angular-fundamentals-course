import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";

import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule, CommonModule,
    // Custom Modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
