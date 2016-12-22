import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { APP_BASE_HREF, Location } from "@angular/common";

import { AppComponent }  from "./app.component";
import { LoginComponent }  from "./login/login.component";
import { DashboardComponent }  from "./dashboard/dashboard.component";
import { routing } from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent],
  bootstrap:    [ AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: window["_app_base"] || "/" }
  ]
})

export class AppModule { }
