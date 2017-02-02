// Admin Dashboard component

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LocalstorageService } from "../login/localstorage.service";
import { DataTableModule, SharedModule } from "primeng/primeng";
import { SearchDeviceService } from "./search.service";
import { PassTableDataService } from "./passtabledata.service";

@Component({
    selector: "searchdevice",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.style.css"]
})

export class SearchDeviceComponent {

	private userName: string;
	cols: any[];
	searchDevicelist: [any];

constructor(private localstorage: LocalstorageService, private devicelist: SearchDeviceService, private router: Router, private selectedData: PassTableDataService) { 
	this.userName = JSON.parse(this.localstorage.getUser()).username;
	this.loadDevices();
}
 

loadDevices() {

	this.devicelist.searchDeviceList()
	.subscribe(deviceList => {
        this.searchDevicelist = deviceList.result;
    });
}

handleRowClick(event) {
	this.selectedData.setData(event.data);
	this.router.navigate(["/deviceallocation"]);
}

}