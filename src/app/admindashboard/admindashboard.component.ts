// Admin Dashboard component

import { Component, OnInit } from "@angular/core";

@Component({
	selector: "admindashboard",
	templateUrl: "./admindashboard.component.html"
})

export class AdminDashboardComponent  {
	
    constructor() {

    }
 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser() {
        
    }
 
    private loadAllUsers() {
    }
}