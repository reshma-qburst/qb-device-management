import { Injectable, Input } from "@angular/core";
import { TableData } from "./tableobject.model";

@Injectable()
export class PassTableDataService {

   selectedData: TableData;
   constructor() { }

   getData() {
return this.selectedData;
   }

   setData(data) {
this.selectedData = data;
   }
}