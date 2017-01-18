// Login Service

import { Injectable, Inject } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable" ;
import { CommonService } from "../app.service";

@Injectable()
export class LoginService {

	isLoggedIn: boolean = false;
	constructor(private http: Http, public commonservice: CommonService) {
             // config.apiEndPoint can be used now
    }

  	userLogin(formData) {
  		return this.commonservice.callPostApi("v1/users/login", formData);
	}

	logout(): void {
	    localStorage.removeItem("currentUser");
	    this.isLoggedIn = false;
	}
}