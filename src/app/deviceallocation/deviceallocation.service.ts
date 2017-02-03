// Device ALlocation Service

import { Injectable, Inject } from "@angular/core";
import { Headers, Response } from "@angular/http";

import { Observable } from "rxjs/Observable" ;
import { CommonService } from "../app.service";

@Injectable()
export class DeviceAllocationService {

	isLoggedIn: boolean = false;
	constructor(public commonservice: CommonService) { }

	allocateDevice(formData) {
  		return this.commonservice.callPostApi("v1/allocation", formData);
 	}

 	releaseDevice(formData) {
 		return this.commonservice.callPostApi("v1/allocation/release", formData);
 	}

}