import { Application } from "./application"
import { Route } from './route'

const routeList: Route[] = []
const application = new Application(routeList)
const expressApplication = application.getExpressApplication()

export default expressApplication
