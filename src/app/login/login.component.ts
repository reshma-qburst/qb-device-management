// Login component
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "login",
  templateUrl: "./src/app/login/login.component.html"
})
export class LoginComponent implements OnInit {

  constructor() {
    // Do stuff
  }
  login() {
    console.log("login");
  }

  ngOnInit() {
    console.log("Hello Login");
  }

}
