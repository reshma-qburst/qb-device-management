import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";

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
            deviceid: new FormControl("", Validators.required)
        });
		
	}

	allocatedevice(deviceallocation) {
		deviceallocation.submitted = true;
		let value = deviceallocation.value;
		if (deviceallocation.valid) {
                
        }
	}
} 