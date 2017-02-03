import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";

import "../../../node_modules/bootstrap-datepicker/js/bootstrap-datepicker.js";
import { NKDatetimeModule } from "../../../node_modules/ng2-datetime/ng2-datetime";
import { PassTableDataService } from "../search/passtabledata.service";
import { TableData } from "../search/tableobject.model";
import { LocalstorageService } from "../login/localstorage.service";
import { CommonService } from "../app.service";
import { DeviceAllocationService } from "./deviceallocation.service";
import { Router } from "@angular/router";

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
	empName: String ;
	empId: number ;
	buttonDisable = true;
	allocId: number;

	constructor(private formBuilder: FormBuilder,
		private passTableDataService: PassTableDataService,
		private localstorage: LocalstorageService,
		public commonservice: CommonService,
		public deviceallocationservice: DeviceAllocationService,
		private router: Router) {

		this.tableData = passTableDataService.getData();

		if (JSON.parse(localstorage.getUser()).roleType === 3 && this.tableData.availability === 0) {
			this.empName = JSON.parse(localstorage.getUser()).empName;
			this.empId = JSON.parse(localstorage.getUser()).empId;
		}else if (JSON.parse(localstorage.getUser()).roleType === 1 && this.tableData.availability === 1 ||
			JSON.parse(localstorage.getUser()).roleType === 3 && this.tableData.availability === 1 ) {
			this.empName = this.tableData.empName;
			this.empId = this.tableData.empId;
		}

		// disable/enable fields based on device availability & logged in user type
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

		// disable/enable release/allocate button
		if (JSON.parse(localstorage.getUser()).roleType === 1) {
			this.buttonDisable = false;
		} else if (JSON.parse(localstorage.getUser()).empId === this.tableData.empId) {
			this.buttonDisable = false;
		} else if (JSON.parse(localstorage.getUser()).empId !== this.tableData.empId && this.tableData.availability === 0 ) {
			this.buttonDisable = false;
		} else if ( JSON.parse(localstorage.getUser()).empId !== this.tableData.empId) {
			this.buttonDisable = true;
		}

		// settings allocation id
		if (this.tableData.allocId != null) {
			this.allocId = this.tableData.allocId;
		}

		this.deviceallocation = new FormGroup({
            empName: new FormControl(this.empName, Validators.required),
            empId: new FormControl(this.empId, Validators.required),
            project: new FormControl(this.tableData.project, Validators.required),
            reportMangr: new FormControl(this.tableData.reportMangr, Validators.required),
            qbdeviceId: new FormControl(this.tableData.deviceId, Validators.required),
            dateOfAllocation: new FormControl({value: this.commonservice.parseDateString(this.tableData.createdDate), disabled: this.isDisableFields}, Validators.required),
            deviceId: new FormControl(this.tableData.id),
            userId: new FormControl(JSON.parse(localstorage.getUser()).id),
            allocId: new FormControl(this.allocId)
        });
	}

	allocatedevice(deviceallocation) {	
		deviceallocation.submitted = true;
		let value = deviceallocation.value;
		if (deviceallocation.valid) {
        	// release device
        	if (deviceallocation.value.allocId != null ) {
        		this.deviceallocationservice.releaseDevice(deviceallocation.value)
                .subscribe(relaseResponse => {
                    if ( relaseResponse.error === 0 ) {      
                    	alert("Device Released!");       
                       this.router.navigate(["/searchdevice"]);
                    }
                    else {
                        
                    }
                });

        	}else {
        		// allocate device
        		this.deviceallocationservice.allocateDevice(deviceallocation.value)
                .subscribe(allocateResponse => {
                    if ( allocateResponse.error === 0 ) {   
                    	alert("Device Successfully Allocated!");             
                       this.router.navigate(["/searchdevice"]);
                    }
                    else {
                        
                    }
                });
        	}


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