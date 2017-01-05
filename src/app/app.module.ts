import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { APP_BASE_HREF, Location } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent }  from "./app.component";
import { HeaderComponent }  from "./shared/header/header.component";
import { FooterComponent }  from "./shared/footer/footer.component";
import { LoginComponent }  from "./login/login.component";
import { AdminDashboardComponent }  from "./admindashboard/admindashboard.component";
import { UserDashboardComponent }  from "./userdashboard/userdashboard.component";
import { routing } from "./app.routing";

import { HttpModule } from "@angular/http";
import { AuthGuard } from "./guards/auth.guard";
import { PreventLoggedInAccess } from "./guards/login.guard";
import { LocalstorageService } from "./login/localstorage.service";
import { AccountSettingsComponent } from "./accountsettings/accountsettings.component";

import { AddDeviceComponent } from "./adddevice/adddevice.component";
import { MenuComponent }  from "./shared/menu/menu.component";

import { MenuService } from "./shared/menu/menu.service";
import { DeviceAllocationComponent } from "./deviceallocation/deviceallocation.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule, ReactiveFormsModule ],
  declarations: [ AppComponent, LoginComponent, AdminDashboardComponent, UserDashboardComponent, AccountSettingsComponent, HeaderComponent, FooterComponent, AddDeviceComponent, MenuComponent, DeviceAllocationComponent],
  bootstrap:    [ AppComponent],
  providers: [
  AuthGuard, PreventLoggedInAccess,
  LocalstorageService,
  MenuService,
    { provide: APP_BASE_HREF, useValue: window["_app_base"] || "/" }
  ]
})

export class AppModule { }