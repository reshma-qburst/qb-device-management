// Add Device Service

import { Injectable } from "@angular/core";

import { LocalstorageService } from "../../login/localstorage.service";

@Injectable()
export class MenuService {
	private userRole: number;
	constructor(private localstorage: LocalstorageService ) { }

	getUserRole() {
    		return JSON.parse(this.localstorage.getUser()).role;
    	}
}