// Login Service

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import "rxjs/add/operator/map";
import { Assets } from "./admindashboard.model";

@Injectable()
export class AdminDashboardService {

	constructor(private http: Http) {
	}

	getAssetsList() {
		return this.http.get("../json/assets.json")
		.map(response => <Assets[]>response.json());
	}
}