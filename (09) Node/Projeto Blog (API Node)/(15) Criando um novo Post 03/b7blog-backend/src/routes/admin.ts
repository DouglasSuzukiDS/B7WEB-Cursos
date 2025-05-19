import { Router } from "express";
import * as adminController from '../controllers/admin'
import { privateRoute } from "../middlewares/private-router";
import { upload } from "../libs/multer";

export const adminRoutes = Router()

adminRoutes.post('/admin/posts', privateRoute, upload.single('cover'), adminController.addPost)
adminRoutes.get('/admin/posts', adminController.getPosts)
adminRoutes.get('/admin/post/:slug', adminController.getPost)
adminRoutes.put('/admin/post/:slug', adminController.editPost)
adminRoutes.delete('/admin/post/:slug', adminController.removePost)