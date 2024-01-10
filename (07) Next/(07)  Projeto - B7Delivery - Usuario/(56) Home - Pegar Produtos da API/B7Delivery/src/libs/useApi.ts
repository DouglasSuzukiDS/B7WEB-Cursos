import { Product } from "@/types/Product"
import { Tenant } from "@/types/Tenant"

const TEMPORARYoneProduct: Product = {
   id: 1,
   image: '/tmp/Burger.png',
   catName: 'Tradicional',
   name: 'Texas Burger',
   price: 25.90,
   description: 'Bacon Caramelizado, Salada, Molho da Casa, Pão Brioche Artesal'
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
               mainColor: '#F00',
               secondColor: '#0F0'
            }
            break
         case 'b7pizza':
            return {
               slug: 'b7pizza',
               name: 'B7Pizza',
               mainColor: '#00F',
               secondColor: '#F00'
            }
            break
         default: return false
      }

   },

   getAllProduct: async() => {
      let products = []

      for(let q = 0; q < 10; q++) {
         products.push(TEMPORARYoneProduct)
      }

      return products
   },

   getProduct: async(id: string) => {
      return TEMPORARYoneProduct
   }
})