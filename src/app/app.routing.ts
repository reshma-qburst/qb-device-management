// For routing
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AdminDashboardComponent } from "./admindashboard/admindashboard.component";
import { UserDashboardComponent } from "./userdashboard/userdashboard.component";
import { AddDeviceComponent } from "./adddevice/adddevice.component";

import { AuthGuard } from "./guards/auth.guard";
import { PreventLoggedInAccess } from "./guards/login.guard";
import { AccountSettingsComponent } from "./accountsettings/accountsettings.component";
import { DeviceAllocationComponent } from "./deviceallocation/deviceallocation.component";
import { SearchDeviceComponent } from "./search/search.component";


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [PreventLoggedInAccess]},
  { path: "admindashboard", component: AdminDashboardComponent, canActivate: [AuthGuard]},
  { path: "userdashboard", component: UserDashboardComponent, canActivate: [AuthGuard]},
  { path: "accountsettings", component: AccountSettingsComponent, canActivate: [AuthGuard]},
  { path: "adddevice", component: AddDeviceComponent, canActivate: [AuthGuard] },
  { path: "deviceallocation", component: DeviceAllocationComponent, canActivate: [AuthGuard] },
  { path: "searchdevice", component: SearchDeviceComponent, canActivate: [AuthGuard] },
    // otherwise redirect to login
  { path: "**", redirectTo: "/login" }
];

export const routing = RouterModule.forRoot(routes);