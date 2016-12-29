import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { provideRoutes } from "@angular/router";
import { Router } from "@angular/router";
import { LocalstorageService } from "./login/localstorage.service";

@Component({
    selector: "main-content-area",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./app.component.html",
    styleUrls: ["./app.style.css"]
})

export class AppComponent implements OnInit {
  public isUserLoggedIn: boolean = false;
  constructor(private localstorage: LocalstorageService, private router: Router) {
    // this.isLoggedIn();
  }

  ngOnInit() {

  }

  // isLoggedIn() {
  //   if (this.localstorage.getUser()) {
  //     this.isUserLoggedIn = true;
  //   }else {
  //     this.isUserLoggedIn = false;
  //   }
  // }


}