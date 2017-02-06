/** Common Services */

import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";

import { APP_CONFIG, IAppConfig } from "./app.config";

@Injectable()
export class CommonService {
   constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) { }

   callPostApi(url, data) {
 		return this.http.post(this.config.apiEndPoint + url, data)
	    	.map((res: Response) => res.json());
   }

   callGetApi(url) {
   		return this.http.get(this.config.apiEndPoint + url)
		.map(response => response.json());
   }

   parseDateString(dateString) {
      var d = new Date(dateString);
   	return (new Date(d.getFullYear(), d.getMonth() + 1, d.getDate())) ;
   }

}