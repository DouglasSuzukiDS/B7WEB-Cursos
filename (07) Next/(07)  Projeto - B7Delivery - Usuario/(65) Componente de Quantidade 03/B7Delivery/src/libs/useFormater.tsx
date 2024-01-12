import { Princess_Sofia } from "next/font/google"
import { format } from "path"

export const useFormater = () => ({
   formatPrice: (price: number) => {
      return price.toLocaleString('pr-br', {
         minimumFractionDigits: 2,
         style: 'currency',
         currency: 'BRL'
      })
   },
   
   formatQuantity: (qt: number, digits: number) => {
      if(qt < 10) {
         return `${ '0'.repeat(digits) }${ qt }`
      } else {
         return qt
      }
   }
})