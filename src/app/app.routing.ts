// For routing
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AdminDashboardComponent } from "./admindashboard/admindashboard.component";
import { UserDashboardComponent } from "./userdashboard/userdashboard.component";

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "admindashboard", component: AdminDashboardComponent },
  { path: "userdashboard", component: UserDashboardComponent }
];

export const routing = RouterModule.forRoot(routes);
