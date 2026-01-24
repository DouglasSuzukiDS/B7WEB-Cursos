import { Router } from "express"
import * as userController from '../controllers/user.controller'

const router = Router()

// POST /api/users - Create a new user
router.post('/', userController.createUser)

// GET /api/users - List users (with pagination)
router.get('/', userController.listUsers)

// GET /api/users/:id - Get user by ID
router.get('/:id', userController.getUser)

export default router