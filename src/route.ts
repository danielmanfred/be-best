import { Application } from "./application";

export interface Route {
    mountRoute(application: Application): void
}
