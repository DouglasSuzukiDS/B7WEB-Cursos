import { CartItem } from './CartItem';
import { Address } from './Address';

export type Order = {
   id: number
   status: 'preparing' | 'sent' |  'delivered'
   orderDate: string // 9999-99-99
   userId: string
   shippingAddress: Address
   shippingPrice: number
   paymentType: 'money' | 'card'
   paymentChange?: number
   cupom?: string
   cupomDiscount?: number
   products: CartItem[]
   subtotal: number
   total: number
}