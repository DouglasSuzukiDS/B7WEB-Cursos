import { Router } from "express";
import * as categoryController from "../controllers/category.controller";

const router = Router()

// POST /api/categories - Create a new category
router.post('/', categoryController.createCategory)

// GET /api/categories - List categories (with includeProductCount flag)
router.get('/', categoryController.listCategories)

export default router