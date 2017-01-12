// Prevent loggedin users from accessing login route.

import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot } from "@angular/router";

import { LocalstorageService } from "../login/localstorage.service";

@Injectable()
export class PreventLoggedInAccess implements CanActivate {
    constructor(private localstorage: LocalstorageService, private router: Router) {}
    canActivate() {
        if (this.localstorage.getUser()) {
            let userData = JSON.parse(this.localstorage.getUser());
            if (userData.role === 1) {
                this.router.navigate(["/admindashboard"]);
            }else if (userData.role === 3) {
                this.router.navigate(["/userdashboard"]);
             }
          return false;
        }
        else
            return true;
    }
}