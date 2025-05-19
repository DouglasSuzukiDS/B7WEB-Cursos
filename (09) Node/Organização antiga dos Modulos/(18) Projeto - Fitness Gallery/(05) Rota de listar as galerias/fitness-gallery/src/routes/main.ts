import { Router } from "express";
import * as pingController from '../controllers/ping'
import * as galleryController from '../controllers/gallery'

export const mainRouter = Router()

mainRouter.get('/ping', pingController.ping)

mainRouter.post('/galleries', galleryController.createGallery)
mainRouter.get('/galleries', galleryController.getGalleries)