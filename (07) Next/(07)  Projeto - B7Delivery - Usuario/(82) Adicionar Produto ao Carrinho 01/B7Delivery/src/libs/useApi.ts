import { Product } from "@/types/Product"
import { Tenant } from "@/types/Tenant"
import { User } from "@/types/User"

const TEMPORARYoneProduct: Product = {
   id: 1,
   image: '/tmp/Burger.png',
   catName: 'Tradicional',
   name: 'Texas Burger',
   price: 25.90,
   description: '2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da Casa, Pão Brioche Artesal'
}

export type getTenantResponse = {
   name: string
   mainColor: string
   secondColor: string
}

export const useApi = (tenantSlug: string) => ({
   getTenant: async() => {
      switch (tenantSlug) {
         case 'b7burger':
            return {
               slug: 'b7burger',
               name: 'B7Burger',
               mainColor: '#FB9400',
               secondColor: '#FFF9F2'
            }
            break
         case 'b7pizza':
            return {
               slug: 'b7pizza',
               name: 'B7Pizza',
               mainColor: '#6AB70A',
               secondColor: '#E0E0E0'
            }
            break
         default: return false
      }

   },

   getAllProduct: async() => {
      let products = []

      for(let q = 0; q < 10; q++) {
         products.push({
            ...TEMPORARYoneProduct,
            id: q + 1
         })
      }

      return products
   },

   getProduct: async(id: string) => {
      return TEMPORARYoneProduct
   },

   authorizeToken: async(token: string): Promise<User | false> => {
      if(!token) return false

      return {
         name: 'Nick',
         email: 'email@email.com'
      }
   }
})