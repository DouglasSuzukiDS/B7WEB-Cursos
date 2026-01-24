import { RequestHandler } from "express";
import * as productService from '../services/product.service';
import { createProductSchema, listProductsSchema } from "../validators/product.validator";

export const createProduct: RequestHandler = async (req, res) => {
   const data = createProductSchema.parse(req.body)

   const product = await productService.createProduct(data)

   res.status(201).json({ error: null, data: product })
}

export const listProducts: RequestHandler = async (req, res) => {
   const { offset, limit, name } = listProductsSchema.parse(req.query)

   const products = await productService.listProducts(offset, limit, name)

   res.status(200).json({ error: null, data: products })
}