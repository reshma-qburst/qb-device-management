// Add Device Service

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";


@Injectable()
export class AddDeviceService {

	constructor(private http: Http) { }

	getDeviceType() {
		return this.http.get("../json/devicetype.json")
		.map(response => response.json());
	}

	addNewDevice() {
		return this.http.get("http://10.9.12.187:3000/api/v1/devices")
		.map(res => res.json());
	}
}