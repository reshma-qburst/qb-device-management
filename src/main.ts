import "core-js";
import "reflect-metadata";
import "zone.js/dist/zone";
/*
import "jquery";
import "jquery-ui";*/

import "../node_modules/primeui/themes/omega/theme.css";
import "../node_modules/primeui/primeui-ng-all.min.css";
/*import "../node_modules/primeui/primeui-ng-all.min.js";*/

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === "complete") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}