// Account settings component.

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { LocalstorageService } from "../login/localstorage.service";

@Component({
    selector: "accountsettings",
    templateUrl: "./accountsettings.component.html",
    styleUrls: ["./accountsettings.style.css"]
})

export class AccountSettingsComponent implements OnInit {

accountsettings: FormGroup;
returnUrl: string;

    constructor(
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder,
		private localstorage: LocalstorageService) {
		this.accountsettings = new FormGroup({
            oldpassword: new FormControl("", Validators.required),
            newpassword: new FormControl("", Validators.required),
            confirmpassword: new FormControl("", Validators.required)
            });
    }
    ngOnInit() {
		this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/accountsettings";
    }

	changepassword(accountsettings) {
		accountsettings.submitted = true;
		let value = accountsettings.value;
		if (accountsettings.valid) {
                
        }
	}
}