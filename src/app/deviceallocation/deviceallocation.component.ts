import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";

import "../../../node_modules/bootstrap-datepicker/js/bootstrap-datepicker.js";
import { NKDatetimeModule } from "../../../node_modules/ng2-datetime/ng2-datetime";

@Component({
selector: "deviceallocation",
templateUrl: "./deviceallocation.component.html",
styleUrls: ["./deviceallocation.style.css"]
})

export class DeviceAllocationComponent {
	
	deviceallocation: FormGroup;
	constructor(private formBuilder: FormBuilder) {
		this.deviceallocation = new FormGroup({
            employeename: new FormControl("", Validators.required),
            employeeid: new FormControl("", Validators.required),
            project: new FormControl("", Validators.required),
            reportingmanager: new FormControl("", Validators.required),
            deviceid: new FormControl("", Validators.required),
            date: new FormControl("", Validators.required)
        });
		
	}

	allocatedevice(deviceallocation) {
		deviceallocation.submitted = true;
		let value = deviceallocation.value;
		if (deviceallocation.valid) {
                
        }
	}

	datepickerOptions = {
	    defaultViewDate: (new Date()),
	    startDate: (new Date()),
	    autoclose: true,
	    todayBtn: "linked",
	    todayHighlight: true,
	    assumeNearbyYear: true,
	    format: "D, d MM yyyy"
	}

	clearFields(deviceallocation) {
		deviceallocation.reset();
		deviceallocation.submitted = false; // remove form errors as well.
	}
} 