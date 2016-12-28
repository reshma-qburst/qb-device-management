// For routing
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AdminDashboardComponent } from "./admindashboard/admindashboard.component";
import { UserDashboardComponent } from "./userdashboard/userdashboard.component";

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent},
  { path: "admindashboard", component: AdminDashboardComponent, canActivate: [AuthGuard]},
  { path: "userdashboard", component: UserDashboardComponent, canActivate: [AuthGuard]},
    // otherwise redirect to login
  { path: "**", redirectTo: "/login" }
];

export const routing = RouterModule.forRoot(routes);