// Login Service

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService {
	constructor(private http: Http) {
		console.log("Service Initialised");
	}

	userLogin() {
		return this.http.get("../json/users.json")
			.map(response => response.json());
	}

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}