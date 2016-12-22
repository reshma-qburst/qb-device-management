import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent }  from "./app.component";
import { LoginComponent }  from "./login/login.component";
import { routing } from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent]
})

export class AppModule { }
