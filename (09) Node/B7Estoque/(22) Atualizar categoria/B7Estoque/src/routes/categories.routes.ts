import { Router } from "express";
import * as categoryController from "../controllers/category.controller";

const router = Router()

// POST /api/categories - Create a new category
router.post('/', categoryController.createCategory)

// GET /api/categories - List categories (with includeProductCount flag)
router.get('/', categoryController.listCategories)

// GET /api/categories/:id - Get category by ID
router.get('/:id', categoryController.getCategory)

// PUT /api/categories/:id - Update category by ID
router.put('/:id', categoryController.updateCategory)

export default router