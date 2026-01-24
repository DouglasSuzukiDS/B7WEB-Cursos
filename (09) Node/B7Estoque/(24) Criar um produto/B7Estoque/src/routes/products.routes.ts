import { Router } from "express";
import * as productController from '../controllers/product.controller';

const routes = Router()

// POST /api/products - Create a new product
routes.post('/', productController.createProduct)

export default routes