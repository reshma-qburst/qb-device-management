import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { APP_BASE_HREF, Location } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from "./app.component";
import { LoginComponent }  from "./login/login.component";
import { AdminDashboardComponent }  from "./admindashboard/admindashboard.component";
import { UserDashboardComponent }  from "./userdashboard/userdashboard.component";
import { routing } from "./app.routing";

import { HttpModule } from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule, ReactiveFormsModule ],
  declarations: [ AppComponent, LoginComponent, AdminDashboardComponent, UserDashboardComponent],
  bootstrap:    [ AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: window["_app_base"] || "/" }
  ]
})

export class AppModule { }