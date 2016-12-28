// User Dashboard component

import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
selector: "admindashboard",
templateUrl: "./userdashboard.component.html"
})

export class UserDashboardComponent {
    constructor(private router: Router) {}
logout() {
        localStorage.removeItem("currentUser");
        this.router.navigate(["/"]);
    }
} 