export type getTenantResponse = {
   name: string
   mainColor: string
   secondColor: string
}

export const useApi = () => ({
   getTenant: (tenantSlug: string): boolean | getTenantResponse => {
      switch(tenantSlug) {
         case 'b7burger':
            return {
               name: 'B7Burger',
               mainColor: '#F00',
               secondColor: '#0F0'
            }
            break
         case 'b7pizza':
            return {
               name: 'B7Burger',
               mainColor: '#00F',
               secondColor: '#0F0'
            }
            break
         default: return false
      }
      
   }
})