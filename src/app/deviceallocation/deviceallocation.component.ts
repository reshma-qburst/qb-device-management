import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";

import "../../../node_modules/bootstrap-datepicker/js/bootstrap-datepicker.js";
import { NKDatetimeModule } from "../../../node_modules/ng2-datetime/ng2-datetime";
import { PassTableDataService } from "../search/passtabledata.service";
import { TableData } from "../search/tableobject.model";

@Component({
selector: "deviceallocation",
templateUrl: "./deviceallocation.component.html",
styleUrls: ["./deviceallocation.style.css"]
})

export class DeviceAllocationComponent {
	
	deviceallocation: FormGroup;
	tableData: TableData;

	constructor(private formBuilder: FormBuilder, private passTableDataService: PassTableDataService) {

		this.tableData = passTableDataService.getData();

		this.deviceallocation = new FormGroup({
            employeename: new FormControl(this.tableData.empName, Validators.required),
            employeeid: new FormControl(this.tableData.empId, Validators.required),
            project: new FormControl(this.tableData.project, Validators.required),
            reportingmanager: new FormControl(this.tableData.reportMangr, Validators.required),
            deviceid: new FormControl(this.tableData.deviceId, Validators.required),
            date: new FormControl(this.tableData.createdDateFormated, Validators.required)
        });
	}

	allocatedevice(deviceallocation) {
		deviceallocation.submitted = true;
		let value = deviceallocation.value;
		if (deviceallocation.valid) {
        	console.log(deviceallocation);
        }
	}

	datepickerOptions = {
	    defaultViewDate: (new Date()),
	    startDate: (new Date()),
	    autoclose: true,
	    todayBtn: "linked",
	    todayHighlight: true,
	    assumeNearbyYear: true,
	    format: "d/M/yyyy"
	}

	clearFields(deviceallocation) {
		deviceallocation.reset();
		deviceallocation.submitted = false; // remove form errors as well.
	}
} 