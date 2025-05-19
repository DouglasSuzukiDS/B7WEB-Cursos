import { Router } from "express"
import * as authController from '../controllers/auth'


export const authRoutes = Router()

authRoutes.post('/auth/signup', authController.signUp)
authRoutes.post('/auth/signin', authController.signIn)
authRoutes.post('/auth/validate', authController.validate)