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
invalidLogin: boolean = false;
returnUrl: string;
invalidPassword: boolean = false;

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
	        this.accountsettings.valueChanges.subscribe(data => {
	            if (this.invalidLogin)
	                this.invalidLogin = false;
	        });
	    }
	ngOnInit() {
	this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/accountsettings";
	}

	changepassword(accountsettings) {
		let value = accountsettings.value;
		accountsettings.oldpasswordMismatch = false;
		accountsettings.newpasswordSameAsOld = false;
		accountsettings.newpasswordAndConfirmPassword = false;

			if (value.oldpassword !== JSON.parse(this.localstorage.getUser()).password) {
					accountsettings.oldpasswordMismatch = true;
			} else if (value.newpassword === JSON.parse(this.localstorage.getUser()).password) {
					accountsettings.newpasswordSameAsOld = true;
			} else if (value.newpassword !== value.confirmpassword) {
					accountsettings.newpasswordAndConfirmPassword = true;
			}

			accountsettings.submitted = true;
			localStorage.setItem("newpassword", value.newpassword);
			if (!accountsettings.oldpasswordMismatch &&
				!accountsettings.newpasswordSameAsOld &&
				!accountsettings.newpasswordAndConfirmPassword ) {
				alert("Saved!");
				this.clearFields(accountsettings);
			}
	}

	clearFields(accountsettings) {
		accountsettings.reset();
		accountsettings.submitted = false; // remove form errors as well.
	}
}