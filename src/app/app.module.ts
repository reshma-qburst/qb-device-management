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
import { AdminDashboardService } from "./admindashboard/admindashboard.service";

import { DataTableModule, SharedModule, AutoCompleteModule } from "primeng/primeng";

import { MenuComponent }  from "./shared/menu/menu.component";
import { MenuService } from "./shared/menu/menu.service";

import { AddDeviceComponent } from "./adddevice/adddevice.component";

import { DeviceAllocationComponent } from "./deviceallocation/deviceallocation.component";

import { NKDatetimeModule } from "../../node_modules/ng2-datetime/ng2-datetime";
import { APP_CONFIG, AppConfig } from "./app.config";
import { CommonService } from "./app.service";

import { SearchDeviceComponent } from "./search/search.component";
import { SearchDeviceService } from "./search/search.service";
import { PassTableDataService } from "./search/passtabledata.service";
import { DeviceAllocationService } from "./deviceallocation/deviceallocation.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule, ReactiveFormsModule, DataTableModule, SharedModule, NKDatetimeModule, AutoCompleteModule ],
  declarations: [ AppComponent, LoginComponent, AdminDashboardComponent, UserDashboardComponent, AccountSettingsComponent, HeaderComponent, FooterComponent, AddDeviceComponent, MenuComponent, DeviceAllocationComponent, SearchDeviceComponent],
  bootstrap:    [ AppComponent],
  providers: [
  AuthGuard, PreventLoggedInAccess,
  LocalstorageService,
  MenuService,
  AdminDashboardService,
  CommonService,
  SearchDeviceService,
  PassTableDataService,
  DeviceAllocationService,
    { provide: APP_BASE_HREF, useValue: window["_app_base"] || "/" },
    { provide: APP_CONFIG, useValue: AppConfig }
  ]
})

export class AppModule { }