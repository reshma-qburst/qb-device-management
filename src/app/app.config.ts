import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    apiEndPoint: string;
}

export const AppConfig: IAppConfig = {
    apiEndPoint: "http://10.9.12.187:3000/api/"
};