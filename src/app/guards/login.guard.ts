// Prevent loggedin users from accessing login route.

import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class PreventLoggedInAccess implements CanActivate {
    constructor(private router: Router) {}
    canActivate() {
        if (localStorage.getItem("currentUser")) {
            let userData = JSON.parse(localStorage.getItem("currentUser"));
            if (userData.role === 0) {
                this.router.navigate(["/admindashboard"]);
            }else if (userData.role === 1) {
                this.router.navigate(["/userdashboard"]);
             }
          return false;
        }
        else
            return true;
    }
} 