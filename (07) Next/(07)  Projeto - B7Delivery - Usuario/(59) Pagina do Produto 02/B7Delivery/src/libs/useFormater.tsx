import { Princess_Sofia } from "next/font/google"

export const useFormater = () => ({
   formatPrice: (price: number) => {
      return price.toLocaleString('pr-br', {
         minimumFractionDigits: 2,
         style: 'currency',
         currency: 'BRL'
      })
   }
})