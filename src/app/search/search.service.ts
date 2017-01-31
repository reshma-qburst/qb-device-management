// Search Devices Service

import { Injectable, Inject } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable" ;
import { CommonService } from "../app.service";

@Injectable()
export class SearchDeviceService {

	isLoggedIn: boolean = false;
	constructor(private http: Http, public commonservice: CommonService) {
             // config.apiEndPoint can be used now
    }

  	searchDeviceList() {
  		// return this.commonservice.callPostApi("v1/users/login", formData);
  		return this.http.get("../json/deviceList.json")
		.map(response => response.json());

	}

}