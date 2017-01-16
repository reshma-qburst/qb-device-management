// Admin Dashboard component

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AdminDashboardService } from "./admindashboard.service";
import { LocalstorageService } from "../login/localstorage.service";
import { Assets } from "./admindashboard.model";

import { DataTableModule, SharedModule } from "primeng/primeng";

@Component({
    selector: "admindashboard",
    templateUrl: "./admindashboard.component.html",
    styleUrls: ["./admindashboard.style.css"]
})

export class AdminDashboardComponent implements OnInit {

	private userName: string;
	cols: any[];
	assetList: Assets[];

constructor(private assetService: AdminDashboardService, private localstorage: LocalstorageService) { 
	this.userName = JSON.parse(this.localstorage.getUser()).username;
	this.loadAssets();
}
 
ngOnInit() { }

loadAssets() {

	this.assetService.getAssetsList()
	               .subscribe(assetList => {
	this.assetList = assetList;
		//console.log(assetList);
	            });

	this.cols = [
		{ field: "deviceCount", header: "Total Devices" },
		{ field: "inUse", header: "In Use" },
		{ field: "availability", header: "Availability" }
	];

}
}