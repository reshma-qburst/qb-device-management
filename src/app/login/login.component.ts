// Login component
import { Component, OnInit } from "@angular/core";
import {RouterModule, Router} from "@angular/router";
@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
constructor(private router: Router) { }
  login() {
    console.log("login");
    this.router.navigate(["dashboard"]);
    // this.router.navigate(["dashboard"]);
  }

  ngOnInit() {
    console.log("Hello Login");
  }

}
