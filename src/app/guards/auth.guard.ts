// Prevent unauthenticated users from accessing restricted routes.

import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { LocalstorageService } from "../login/localstorage.service";
import { AppConstants } from "../app.constants";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private localstorage: LocalstorageService, private router: Router) {}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.localstorage.getUser()) {
            let userData = JSON.parse(this.localstorage.getUser());
            if (userData.roleType === AppConstants.ROLE_ADMIN && state.url === "/admindashboard" ||
                userData.roleType === AppConstants.ROLE_USER && state.url === "/userdashboard" ||
                userData.roleType === AppConstants.ROLE_ADMIN && state.url === "/adddevice" ||
                userData.roleType === AppConstants.ROLE_USER && state.url === "/adddevice" ||
                userData.roleType === AppConstants.ROLE_ADMIN && state.url === "/accountsettings" ||
                userData.roleType === AppConstants.ROLE_USER && state.url === "/accountsettings" ||
                userData.roleType === AppConstants.ROLE_ADMIN && state.url === "/deviceallocation" ||
                userData.roleType === AppConstants.ROLE_USER && state.url === "/deviceallocation" ) {
                    return true;
            }
        }
        this.router.navigate(["login"]);
            return false;
    }
}