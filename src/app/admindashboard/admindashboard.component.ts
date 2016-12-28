// Admin Dashboard component

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "admindashboard",
    templateUrl: "./admindashboard.component.html",
    styleUrls: ["./admindashboard.style.css"]
})

export class AdminDashboardComponent  {
    constructor(private router: Router) {

    }
 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser() {
        
    }
 
    private loadAllUsers() {
    }
    logout() {
        localStorage.removeItem("currentUser");
        // this.isLoggedIn = false;
        this.router.navigate(["/"]);
    }
}