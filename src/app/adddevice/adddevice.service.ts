// Add Device Service

import { Injectable, Inject } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { APP_CONFIG, IAppConfig } from "../app.config";
import { CommonService } from "../app.service";


@Injectable()
export class AddDeviceService {

	constructor(private http: Http, @Inject(APP_CONFIG) private config: IAppConfig, public commonservice: CommonService) { }

	getDeviceType() {

		return this.http.get("../json/devicetype.json")
		.map(response => response.json());

		// return this.commonservice.callGetApi();
	}

	addNewDevice() {
		return this.http.get(this.config.apiEndPoint + "v1/devices")
		.map(res => res.json());
	}
}