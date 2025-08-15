import { RequestHandler } from "express";
import { cartMountSchema } from "../schemas/cart-mount-schema";
import { getProduct } from "../services/products";
import { getAbsoluteImageUrl } from "../utils/get-absolut-image-url";

export const cartMount: RequestHandler = async (req, res) => {
   const parseResult = cartMountSchema.safeParse(req.body)

   if (!parseResult.success) {
      res.status(400).json({ error: parseResult.error })
      return
   }

   const { ids } = parseResult.data

   let products = []

   for (let id of ids) {
      const product = await getProduct(id)

      if (product) {
         products.push({
            id: product.id,
            label: product.label,
            price: product.price,
            image: product.images[0] ?
               getAbsoluteImageUrl(product.images[0]) : null
         })
      }
   }

   res.json({ error: null, products })
}