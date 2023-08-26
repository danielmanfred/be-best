import { Application } from "express"
import { Route } from './route'

export class PersonRoute implements Route {

    constructor(private personController: PersonController) {}
    
    mountRoute(application: Application): void {
        application.route('/api/person/:username').get(this.personController.retrieve)
    }
}
