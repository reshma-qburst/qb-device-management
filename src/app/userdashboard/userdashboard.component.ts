// User Dashboard component

import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "admindashboard",
    templateUrl: "./userdashboard.component.html",
    styleUrls: ["./userdashboard.style.css"]
})

export class UserDashboardComponent {
    constructor(private router: Router) {}
logout() {
        localStorage.removeItem("currentUser");
        this.router.navigate(["/"]);
    }
} 