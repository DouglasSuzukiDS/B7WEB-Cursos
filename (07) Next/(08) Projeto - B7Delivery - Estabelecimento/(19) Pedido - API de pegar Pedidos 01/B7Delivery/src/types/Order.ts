import { Address } from "./Address"
import { CartItem } from "./CartItem"
import { OrderStatus } from "./OrderStatus"

export type Order = {
   id: number
   status: OrderStatus
   orderDate: string
   iserId: string
   userName?: string
   shippingAddress: Address
   shippingPrice: number
   paymentType: 'card' | 'money'
   changeValue?: number
   cupom?: string
   cupomDiscount: number
   products: CartItem[]
   subTotal: number
   total: number
}  