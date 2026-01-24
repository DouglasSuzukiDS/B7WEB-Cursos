import { Router } from "express";
import * as productController from '../controllers/product.controller';

const routes = Router()

// POST /api/products - Create a new product
routes.post('/', productController.createProduct)

// GET /api/products - List products (pagination & name search)
routes.get('/', productController.listProducts)

export default routes