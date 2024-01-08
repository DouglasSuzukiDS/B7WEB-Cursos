import { Tenant } from "@/types/Tenant"

export type getTenantResponse = {
   name: string
   mainColor: string
   secondColor: string
}

export const useApi = () => ({
   getTenant: (tenantSlug: string): boolean | Tenant => {
      switch(tenantSlug) {
         case 'b7burger':
            return {
               slug: 'B7Burger',
               name: 'B7Burger',
               mainColor: '#F00',
               secondColor: '#0F0'
            }
            break
         case 'b7pizza':
            return {
               slug: 'B7Pizza',
               name: 'B7Pizza',
               mainColor: '#00F',
               secondColor: '#F00'
            }
            break
         default: return false
      }
      
   }
})