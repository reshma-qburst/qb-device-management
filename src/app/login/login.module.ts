// Login Module
import { NgModule }      from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";

import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';

import { LoginService } from "./login.service";

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ LoginComponent ],
  providers: [ LoginService ],
  exports: [ LoginComponent ]
})
export class LoginModule { };