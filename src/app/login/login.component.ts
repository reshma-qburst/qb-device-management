// Login component.

import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "./login.service";
import { LocalstorageService } from "./localstorage.service";
import { AppConstants } from "../app.constants";

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    providers: [ LoginService ],
    styleUrls: ["./login.style.css"]
})
export class LoginComponent implements OnInit {
        model: any = {};
        returnUrl: string;
        loginForm: FormGroup;
        user: [any];
        invalidLogin: boolean = false;
        invalidEmail: boolean = false;
        constructor(
            private route: ActivatedRoute,
            private router: Router,
            private loginservice: LoginService,
            private formBuilder: FormBuilder,
            private localstorage: LocalstorageService) {
            this.loginForm = new FormGroup({
                email: new FormControl("", Validators.required),
                password: new FormControl("", Validators.required)
                });
            this.loginForm.valueChanges.subscribe(data => {
                if (this.invalidLogin)
                    this.invalidLogin = false;
            });
        }

        login(loginform) {
            let value = loginform.value;
            loginform.submitted = true;
            let EMAIL_REGEXP = AppConstants.EMAIL_PATTERN;
            if (!EMAIL_REGEXP.test(value.email) ) {
                this.invalidEmail = true;
            }else if (loginform.valid) {
                this.invalidEmail = false;
                this.loginservice.userLogin(value)
                .subscribe(loginResponse => {
                    if ( loginResponse.error === 0 ) {
                        let response = JSON.stringify(loginResponse.result);
                        this.localstorage.setUser(loginResponse.result);
                        this.invalidLogin = false;
                        if (loginResponse.result.roleType === AppConstants.ROLE_ADMIN) {
                            this.router.navigate(["/admindashboard"]);
                        }else if (loginResponse.result.roleType === AppConstants.ROLE_USER) {
                            this.router.navigate(["/userdashboard"]);
                        }
                    }
                    else {
                        this.invalidLogin = true;
                    }
                });
            }
        }

        ngOnInit() {
            this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
        }
}