'use server'

type ShippingResponse = {
   zipcode: string
   cost: number
   days: number
}
export const getShippingInfo = async (zipcode: string): Promise<ShippingResponse | false> => {
   return {
      zipcode: '12345',
      cost: 7,
      days: 3
   }
}