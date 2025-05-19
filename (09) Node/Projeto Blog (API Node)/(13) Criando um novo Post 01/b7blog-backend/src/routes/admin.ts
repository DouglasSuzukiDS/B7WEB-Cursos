import { Router } from "express";
import * as adminController from '../controllers/admin'
import { privateRoute } from "../middlewares/private-router";
import { upload } from "../libs/multer";

export const adminRoutes = Router()

adminRoutes.post('/posts', privateRoute, upload.single('cover'), adminController.addPost)
adminRoutes.get('/posts', adminController.getPosts)
adminRoutes.get('/post/:slug', adminController.getPost)
adminRoutes.put('/post/:slug', adminController.editPost)
adminRoutes.delete('/post/:slug', adminController.removePost)