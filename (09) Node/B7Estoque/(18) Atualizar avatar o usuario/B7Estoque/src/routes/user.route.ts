import { Router } from "express"
import * as userController from '../controllers/user.controller'
import { uploadAvatar } from "../middlewares/upload.middleware"

const router = Router()

// POST /api/users - Create a new user
router.post('/', userController.createUser)

// GET /api/users - List users (with pagination)
router.get('/', userController.listUsers)

// GET /api/users/:id - Get user by ID
router.get('/:id', userController.getUser)

// DELETE /api/users/:id - Delete user by ID
router.delete('/:id', userController.deleteUser)

// PUT /api/users/:id - Update user by ID
router.put('/:id', uploadAvatar, userController.updateUser)

export default router