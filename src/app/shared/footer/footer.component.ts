// Footer Component
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "footerSection",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.style.css"]
})
export class FooterComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router) {
    }
    ngOnInit() {
    }
}