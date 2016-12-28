// Login component
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "./login.service";
import { LocalstorageService } from "./localstorage.service";

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
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginservice: LoginService,
        private formBuilder: FormBuilder,
        private localstorage: LocalstorageService) {
        this.loginForm = new FormGroup({
            username: new FormControl("", Validators.required),
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
            if (loginform.valid) {
                this.loginservice.userLogin()
                .subscribe(login => {
                    this.login = login;
                    if ( this.checkUser(value, login) ) {
                        this.localstorage.setUser(this.user[0]);
                        this.invalidLogin = false;
                        if ( this.user[0].role === 0) {
                            this.router.navigate(["/admindashboard"]);
                        }else if ( this.user[0].role === 1) {
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
        checkUser(userValue, users) {
            this.user = users.filter(
                element => {
                    return element.username === userValue.username && element.password === userValue.password ;
                });
            if (this.user.length)
                return true;
        }
}
