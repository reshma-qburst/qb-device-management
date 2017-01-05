// Menu Component

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "menuSection",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.style.css"]
})
export class MenuComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router) {
    }
    ngOnInit() {
    }
}
