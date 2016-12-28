// Prevent unauthenticated users from accessing restricted routes.

import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { LocalstorageService } from "../login/localstorage.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private localstorage: LocalstorageService, private router: Router) {}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.localstorage.getUser()) {
            let userData = JSON.parse(this.localstorage.getUser());
            if (userData.role === 0 && state.url === "/admindashboard") {
                return true;
            }else if (userData.role === 1 && state.url === "/userdashboard") {
                return true;
            }
        }
        this.router.navigate(["login"]);
            return false;
    }
}