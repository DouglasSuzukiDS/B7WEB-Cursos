import { Router } from "express";
import * as adminController from '../controllers/admin'
import { privateRoute } from "../middlewares/private-router";
import { upload } from "../libs/multer";

export const adminRoutes = Router()

adminRoutes.post('/admin/posts', privateRoute, upload.single('cover'), adminController.addPost)
adminRoutes.get('/admin/posts', privateRoute, adminController.getPosts)
adminRoutes.get('/admin/post/:slug', privateRoute, adminController.getPost)
adminRoutes.put('/admin/post/:slug', privateRoute, upload.single('cover'), adminController.editPost)
adminRoutes.delete('/admin/posts/:slug', privateRoute, adminController.removePost)