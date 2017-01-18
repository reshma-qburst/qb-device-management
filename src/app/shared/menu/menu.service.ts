// Menu Service

import { Injectable } from "@angular/core";

import { LocalstorageService } from "../../login/localstorage.service";

@Injectable()
export class MenuService {
	constructor(private localstorage: LocalstorageService ) { }

	getUserRole() {
  		return JSON.parse(this.localstorage.getUser()).roleType;
   	}
}
