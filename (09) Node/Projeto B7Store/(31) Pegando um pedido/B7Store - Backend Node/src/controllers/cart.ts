import { RequestHandler } from "express";
import { cartMountSchema } from "../schemas/cart-mount-schema";
import { getProduct } from "../services/products";
import { getAbsoluteImageUrl } from "../utils/get-absolut-image-url";
import { calculateShippingSchema } from "../schemas/calculate-shipping-schema";
import { cartFinishSchema } from "../schemas/cart-finish-schema";
import { getAddressById } from "../services/user";
import { createOrder } from "../services/order";
import { createPaymentLink } from "../services/payment";

export const cartMount: RequestHandler = async (req, res) => {
   const parseResult = cartMountSchema.safeParse(req.body)

   if (!parseResult.success) {
      res.status(400).json({ error: 'Array de ids inválidos' })
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

export const calculateShipping: RequestHandler = (req, res) => {
   const parseResult = calculateShippingSchema.safeParse(req.query)

   if (!parseResult.success) {
      res.status(400).json({ error: 'CEP inválido' })
      return
   }

   const { zipcode } = parseResult.data

   res.json({ error: null, zipcode, cost: 7, days: 3 })
}

export const finish: RequestHandler = async (req, res) => {
   const userId = (req as any).userId

   if (!userId) {
      res.status(401).json({ error: 'Acesso negado' })
      return
   }

   const result = cartFinishSchema.safeParse(req.body)

   if (!result.success) {
      res.status(400).json({ error: 'Carrinho inexistente' })
      return
   }

   const { cart, addressId } = result.data

   const address = await getAddressById(userId, addressId)

   if (!address) {
      res.status(404).json({ error: 'Endereço não encontrado' })
      return
   }

   const shippingCost = 7
   const shippingDays = 3

   const orderId = await createOrder({
      userId,
      address,
      shippingCost,
      shippingDays,
      cart
   })

   if (!orderId) {
      res.status(404).json({ error: 'Ocorreu um erro' })
      return
   }

   let url = await createPaymentLink({ cart, shippingCost, orderId })

   if (!url) {
      res.status(404).json({ error: 'Ocorreu um erro' })
      return
   }

   res.status(201).json({ error: null, url })
}