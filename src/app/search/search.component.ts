// Admin Dashboard component

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LocalstorageService } from "../login/localstorage.service";
import { DataTableModule, SharedModule } from "primeng/primeng";
import { SearchDeviceService } from "./search.service";

@Component({
    selector: "searchdevice",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.style.css"]
})

export class SearchDeviceComponent {

	private userName: string;
	cols: any[];
	searchDevicelist: [any];

constructor(private localstorage: LocalstorageService, private devicelist: SearchDeviceService) { 
	this.userName = JSON.parse(this.localstorage.getUser()).username;
	this.loadDevices();
}
 

loadDevices() {

	this.devicelist.searchDeviceList()
	.subscribe(deviceList => {
		console.log(deviceList);
         	this.searchDevicelist = deviceList;
    });

	this.cols = [
		{ field: "deviceName", header: "Device Name" },
		{ field: "deviceId", header: "Device ID" },
		{ field: "screenSize", header: "Device Size" },
		{ field: "deviceType", header: "Device Type" },
		{ field: "osVersion", header: "OS Version" },
		{ field: "availability", header: "Availability" },
		{ field: "email", header: "Assigned To" },
		{ field: "empId", header: "Employee ID" }
	];

}
}