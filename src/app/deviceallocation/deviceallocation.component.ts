import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";

import "../../../node_modules/bootstrap-datepicker/js/bootstrap-datepicker.js";
import { NKDatetimeModule } from "../../../node_modules/ng2-datetime/ng2-datetime";
import { PassTableDataService } from "../search/passtabledata.service";
import { TableData } from "../search/tableobject.model";
import { LocalstorageService } from "../login/localstorage.service";

@Component({
selector: "deviceallocation",
templateUrl: "./deviceallocation.component.html",
styleUrls: ["./deviceallocation.style.css"]
})

export class DeviceAllocationComponent {
	
	deviceallocation: FormGroup;
	tableData: TableData;
	isDisableFields = false;
	isDisable = false;
	employeeName: String ;
	employeeId: number ;

	constructor(private formBuilder: FormBuilder,
		private passTableDataService: PassTableDataService,
		private localstorage: LocalstorageService) {

		this.tableData = passTableDataService.getData();
		if (JSON.parse(localstorage.getUser()).roleType === 3) {
			this.employeeName = JSON.parse(localstorage.getUser()).empName;
			this.employeeId = JSON.parse(localstorage.getUser()).empId;
		}else if (JSON.parse(localstorage.getUser()).roleType === 1 && this.tableData.availability === 1) {
			this.employeeName = this.tableData.empName;
			this.employeeId = this.tableData.empId;
		}

		if (this.tableData.availability === 1 ) {
			this.isDisableFields = true;
			this.isDisable = true;
		}else if (JSON.parse(localstorage.getUser()).roleType === 1 && this.tableData.availability === 0) {
			this.isDisable = false;
			this.isDisableFields = false;
		}else if (JSON.parse(localstorage.getUser()).roleType === 3 && this.tableData.availability === 0) {
			this.isDisable = true;
			this.isDisableFields = false;
		}

		this.deviceallocation = new FormGroup({
            employeename: new FormControl({value: this.employeeName, disabled: this.isDisable}, Validators.required),
            employeeid: new FormControl({value: this.employeeId, disabled: this.isDisable}, Validators.required),
            project: new FormControl({value: this.tableData.project, disabled: this.isDisableFields}, Validators.required),
            reportingmanager: new FormControl({value: this.tableData.reportMangr, disabled: this.isDisableFields}, Validators.required),
            deviceid: new FormControl({value: this.tableData.deviceId, disabled: true}, Validators.required),
            date: new FormControl({value: this.tableData.createdDateFormated, disabled: this.isDisableFields}, Validators.required)
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