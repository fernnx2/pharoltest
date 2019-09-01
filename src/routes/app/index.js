import {Router} from 'express'
import welcomeRoute  from './welcome.route'
import imageRoute from './image.route'
const routes = Router();

routes.use('/',welcomeRoute);
routes.use('/',imageRoute);

export default routes;