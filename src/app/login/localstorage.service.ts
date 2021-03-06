// To store user in local storage.

import { Injectable } from "@angular/core";


@Injectable()
export class LocalstorageService {

    constructor() {
    }

    setUser(user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        return true;
    }

    getUser() {
        return localStorage.getItem("currentUser");
    }

}