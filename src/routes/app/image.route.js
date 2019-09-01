import {Router} from 'express'
import imageController from '../../controllers/image.controller'

const imageRoute = Router();

imageRoute.get('/image',imageController.index);

export default imageRoute;