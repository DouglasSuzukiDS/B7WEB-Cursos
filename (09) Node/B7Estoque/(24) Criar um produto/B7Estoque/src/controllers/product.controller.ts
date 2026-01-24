import { RequestHandler } from "express";
import * as productService from '../services/product.service';
import { createProductSchema } from "../validators/product.validator";

export const createProduct: RequestHandler = async (req, res) => {
   const data = createProductSchema.parse(req.body)

   const product = await productService.createProduct(data)

   res.status(201).json({ error: null, data: product })
}