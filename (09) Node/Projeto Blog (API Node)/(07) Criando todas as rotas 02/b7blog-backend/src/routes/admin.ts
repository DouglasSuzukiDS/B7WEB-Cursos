import { Router } from "express";
import * as adminController from '../controllers/admin'

export const adminRoutes = Router()

adminRoutes.post('/posts', adminController.addPost)
adminRoutes.get('/posts', adminController.getPosts)
adminRoutes.get('/post/:slug', adminController.getPost)
adminRoutes.put('/post/:slug', adminController.editPost)
adminRoutes.delete('/post/:slug', adminController.removePost)