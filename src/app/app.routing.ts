// For routing
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AdminDashboardComponent } from "./admindashboard/admindashboard.component";
import { UserDashboardComponent } from "./userdashboard/userdashboard.component";

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard]},
  { path: "admindashboard", component: AdminDashboardComponent },
  { path: "userdashboard", component: UserDashboardComponent },
    // otherwise redirect to login
  { path: "**", redirectTo: "/login" }
];

export const routing = RouterModule.forRoot(routes);