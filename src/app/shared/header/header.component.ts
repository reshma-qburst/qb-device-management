// Header Component
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LocalstorageService } from "../../login/localstorage.service";
@Component({
    selector: "headerSection",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.style.css"]
})
export class HeaderComponent implements OnInit {
    private isUserLoggedIn: boolean = false;
    constructor(
        private localstorage: LocalstorageService,
        private route: ActivatedRoute,
        private router: Router) {
    }
    ngOnInit() {}
    logout() {
        this.isUserLoggedIn = false;
        localStorage.removeItem("currentUser");
        this.router.navigate(["/"]);
    }
}
