import { Router } from "express"
import * as userController from '../controllers/user.controller'

const router = Router()

// POST /api/users - Create a new user
router.post('/', userController.createUser)

// GET /api/users - List users (with pagination)
router.get('/', userController.listUsers)

export default router