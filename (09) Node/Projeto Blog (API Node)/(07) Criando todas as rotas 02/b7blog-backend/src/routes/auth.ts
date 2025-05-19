import { Router } from "express"
import * as authController from '../controllers/auth'


export const authRoutes = Router()

authRoutes.post('/signup', authController.signUp)
authRoutes.post('/signin', authController.signIn)
authRoutes.post('/validate', authController.validate)