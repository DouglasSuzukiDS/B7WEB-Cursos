import { RequestHandler } from "express";
import * as productService from '../services/product.service';
import { createProductSchema, listProductsSchema, productIdSchema } from "../validators/product.validator";
import { AppError } from "../utils/apperror";

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

export const getProduct: RequestHandler = async (req, res) => {
   const { id } = productIdSchema.parse(req.params)

   const product = await productService.getProductByIdWithDetails(id)

   if (!product) throw new AppError('Produto não encontrado.', 404)

   res.status(200).json({ error: null, data: product })
}