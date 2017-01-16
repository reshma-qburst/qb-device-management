// Add Device component

import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { AddDeviceService } from "./adddevice.service";

@Component({
    selector: "adddevice",
    templateUrl: "./adddevice.component.html",
    providers: [ AddDeviceService ],
    styleUrls: ["./adddevice.style.css"]
})

export class AddDeviceComponent {

addDeviceForm: FormGroup;
devicetypelist: [any];
selectedId: number;

    constructor(private router: Router, private formBuilder: FormBuilder, private deviceService: AddDeviceService) {

	this.deviceService.getDeviceType()
        .subscribe(devicetypelist => {
        this.devicetypelist = devicetypelist;
    });

	this.addDeviceForm = new FormGroup({
            devicename: new FormControl("", Validators.required),
            devicesize: new FormControl("", Validators.required),
            devicetype: new FormControl("", Validators.required),
            deviceid: new FormControl("", Validators.required),
            osVer: new FormControl("", Validators.required)
        });
    }

	addDevice(addDeviceForm) {
		let value = addDeviceForm.value;
		addDeviceForm.submitted = true;
		if (addDeviceForm.valid) {

            this.deviceService.addNewDevice()
                .subscribe(addDeviceReponse => {
                    console.log(addDeviceReponse);
            });
		}
	}

	onSelect(id) {
        this.selectedId = id;
    }

    clearFields(addDeviceForm) {
        addDeviceForm.reset();
        addDeviceForm.submitted = false; // remove form errors as well.
    }
}