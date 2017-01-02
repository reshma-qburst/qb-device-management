// Admin Dashboard component

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "admindashboard",
    templateUrl: "./admindashboard.component.html",
    styleUrls: ["./admindashboard.style.css"]
})

export class AdminDashboardComponent {
    constructor(private router: Router) { 

}
 
    ngOnInit() { }
}