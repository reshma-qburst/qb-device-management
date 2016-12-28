// Prevent unauthenticated users from accessing restricted routes.

import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem("currentUser")) {
            let userData = JSON.parse(localStorage.getItem("currentUser"));
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