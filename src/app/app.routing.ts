// For routing
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AdminDashboardComponent } from "./admindashboard/admindashboard.component";
import { UserDashboardComponent } from "./userdashboard/userdashboard.component";

import { AuthGuard } from "./guards/auth.guard";
import { PreventLoggedInAccess } from "./guards/login.guard";
import { AccountSettingsComponent } from "./accountsettings/accountsettings.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [PreventLoggedInAccess]},
  { path: "admindashboard", component: AdminDashboardComponent, canActivate: [AuthGuard]},
  { path: "userdashboard", component: UserDashboardComponent, canActivate: [AuthGuard]},
  { path: "accountsettings", component: AccountSettingsComponent, canActivate: [AuthGuard]},
    // otherwise redirect to login
  { path: "**", redirectTo: "/login"}
];

export const routing = RouterModule.forRoot(routes);