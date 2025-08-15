import { RequestHandler } from "express";
import { getProductSchema } from "../schemas/get-product-schema";
import { getAllProducts } from "../services/products";
import { getAbsoluteImageUrl } from "../utils/get-absolut-image-url";

export const getProducts: RequestHandler = async (req, res) => {
   const parseResult = getProductSchema.safeParse(req.query)

   if (!parseResult.success) {
      res.status(400).json({ error: 'Parâmetros inválidos' })
      return
   }

   const { metadata, orderBy, limit } = parseResult.data

   const parsedLimit = limit ? parseInt(limit) : undefined

   const parsedMetadata = metadata ? JSON.parse(metadata) : undefined

   const products = await getAllProducts({
      metadata: parsedMetadata,
      order: orderBy,
      limit: parsedLimit
   })

   console.log(parseResult)
   console.log(orderBy)

   const productsWithAbsoluteUrl = products.map(product => ({
      ...product,
      image: product.image ? getAbsoluteImageUrl(product.image) : null,
      liked: false // TODO: Once have like funccionallity, fetch this.
   }))

   res.json({ error: null, products: productsWithAbsoluteUrl });
}