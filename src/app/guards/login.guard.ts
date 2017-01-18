// Prevent loggedin users from accessing login route.

import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot } from "@angular/router";

import { LocalstorageService } from "../login/localstorage.service";
import { AppConstants } from "../app.constants";

@Injectable()
export class PreventLoggedInAccess implements CanActivate {
    constructor(private localstorage: LocalstorageService, private router: Router) {}
    canActivate() {
        if (this.localstorage.getUser()) {
            let userData = JSON.parse( this.localstorage.getUser() );
            if (userData.roleType === AppConstants.ROLE_ADMIN) {
                this.router.navigate(["/admindashboard"]);
            }else if (userData.roleType === AppConstants.ROLE_USER) {
                this.router.navigate(["/userdashboard"]);
             }
          return false;
        }
        else
            return true;
    }
}