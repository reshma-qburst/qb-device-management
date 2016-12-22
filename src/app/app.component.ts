import { Component, OnInit } from "@angular/core";
import { provideRoutes } from "@angular/router";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html"
})

export class AppComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log("Hello Home");
  }

}