import "core-js";
import "reflect-metadata";
import "zone.js/dist/zone";

import "../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css";

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