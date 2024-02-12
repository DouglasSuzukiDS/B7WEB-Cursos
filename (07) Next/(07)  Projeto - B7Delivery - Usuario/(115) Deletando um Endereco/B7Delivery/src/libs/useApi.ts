import { Address } from "@/types/Address"
import { CartItem } from "@/types/CartItem"
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

   getProduct: async(id: number) => {
      return { ...TEMPORARYoneProduct, id }
   },

   authorizeToken: async(token: string): Promise<User | false> => {
      if(!token) return false

      return {
         name: 'Nick',
         email: 'email@email.com'
      }
   },

   getCartProducts: async(cartCookie: string) => {
      let cart: CartItem[] = []

      if(!cartCookie) return cart

      const cartJson = JSON.parse(cartCookie)

      for(let i in cartJson) {
         if(cartJson[i].id && cartJson[i].qt) {
            const product = {
               ...TEMPORARYoneProduct,
               id: cartJson[i].id
            }

            cart.push({
               qt: cartJson[i].qt,
               product
            })
         }
      }

      return cart
   },

   getUserAddresses: async(email: string) => {
      const addresses: Address[] = []

      for(let i = 0; i < 4; i++) {
         addresses.push({
            id: i + 1,
            street: 'Rua blabla',
            number: `${ i + 1 }00`,
            cep: '99999-999',
            city: 'São Paulo',
            neighborhood: 'São Paulo',
            state: 'SP'
         })
      }

      return addresses
   },

   getUserAddress: async(addressId: number) => {
      let address: Address = {
         id: addressId,
         street: 'Rua blabla',
         number: `${ addressId }00`,
         cep: '99999-999',
         city: 'São Paulo',
         neighborhood: 'São Paulo',
         state: 'SP'
      }

      return address
   },

   addUserAddress: async(address: Address) => {
      return { ...address, id: 9 }
   },

   editUserAddress: async(newAddressData: Address) => {
      return true
   },

   deleteUserAddress: async(addressId: number) => {
      return true
   },

   getShippingPrice: async(address: Address) => {
      return 9.20
   }
})