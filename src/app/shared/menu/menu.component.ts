// Menu Component

import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LocalstorageService } from "../../login/localstorage.service";

import { MenuService } from "./menu.service";


@Component({
    selector: "menuSection",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.style.css"]
})
export class MenuComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private localstorage: LocalstorageService,
        private menuservice: MenuService) {
    }
}
