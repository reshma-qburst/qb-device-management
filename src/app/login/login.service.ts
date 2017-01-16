// Login Service

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable" ;
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

@Injectable()
export class LoginService {

	isLoggedIn: boolean = false;

	// store the URL so we can redirect after logging in
	  redirectUrl: string;

	constructor(private http: Http) {

	}

  	userLogin(formData) {
	    return this.http.post('http://10.9.12.187:3000/api/v1/users/login', formData).map((res: Response) => res.json());
	}

	logout(): void {
	    localStorage.removeItem("currentUser");
	    this.isLoggedIn = false;
	}
}