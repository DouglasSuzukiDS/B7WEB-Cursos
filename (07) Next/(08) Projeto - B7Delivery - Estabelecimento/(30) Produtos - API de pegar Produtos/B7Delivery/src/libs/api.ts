import { Category } from "@/types/Category"
import { Order } from "@/types/Order"
import { OrderStatus } from "@/types/OrderStatus"
import { Product } from "@/types/Product"

const tmpProduct: Product = {
   id: 999,
   image: 'https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg',
   category: {
      id: 99,
      name: 'Burgers'
   },
   name: 'Burgao',
   price: 35.3,
   description: 'Burger com hamburguer artezanal'
}

export const api = {
   login: async(email: string, password: string): Promise<{ error: string, token?: string }> => {
      return new Promise(resolve => { 
         setTimeout(() => {
            if(email !== 'email@email.com') {
               resolve({
                  error: 'Email e/ou senha não batem.'
               })
            } else {
               resolve({
                  error: '',
                  token: '123'
               })
            }
         }, 1000)
      })
   },

   forgotPassword: async(email: string): Promise<{ error: string }> => {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve({ error: '' })
         }, 1000)
      })
   },

   redefinePassword: async(password: string, token: string): Promise<{ error: string }> => {
      return new Promise(resolve => {
         setTimeout(() => {
            resolve({ error: '' })
         }, 1000)
      })
   },

   getOrders: async(): Promise<Order[]> => {
      return new Promise(resolve => {
         setTimeout(() => {
            const orders: Order[] = []
            const statuses: OrderStatus[] = ['preparing', 'sent', 'delivered']

            for(let i = 0; i < 6; i++) {
               orders.push({
                  id: parseInt(`12${ i }`),
                  status: statuses[Math.floor(Math.random() * 3)], // Gera o numero de 0 à 2
                  orderDate: '2024-02-18 18:30',
                  userId: '1',
                  userName: 'Shanks',
                  shippingAddress: {
                     id: '99',
                     cep: '99999999',
                     address: 'Rua blabla',
                     number: '1200',
                     neighborhood: 'Algum',
                     city: 'São Paulo',
                     state: 'SP',
                     complement: 'Blablabla'
                  },
                  shippingPrice: 12,
                  paymentType: 'card',
                  changeValue: 0,
                  cupom: 'BLA',
                  cupomDiscount: 2, 
                  products: [
                     { qt: 2, product: tmpProduct },
                     { qt: 3, product: { ...tmpProduct, id: 888, name: 'Burger Vegetariano' } }
                  ],
                  subTotal: 99,
                  total: 120
               })
            }

            resolve(orders)
         }, 1000)
      })
   },

   changeOrderStatus: async(id: number, newState: OrderStatus) => {
      return true
   },

   getCategories: async(): Promise<Category[]> => {
      const list: Category[] = [
         { id: 99, name: 'Burgers' },
         { id: 98, name: 'Refrigerantes' }, 
         { id: 97, name: 'Doces' }
      ]

      return new Promise(resolve => {
         setTimeout(() => {
            resolve(list)
         }, 200)
      })
   },

   getProducts: async(): Promise<Product[]> => {
      const list: Product[] = [
         { ...tmpProduct, id: 123 },
         { ...tmpProduct, id: 124 },
         { ...tmpProduct, id: 125 },
         { ...tmpProduct, id: 126 },
         { ...tmpProduct, id: 127 },
         { ...tmpProduct, id: 128 },
         { ...tmpProduct, id: 129 },
         { ...tmpProduct, id: 130 },
      ]

      return new Promise(resolve => {
         setTimeout(() => {
            resolve(list)
         }, 500)
      })
   }
}