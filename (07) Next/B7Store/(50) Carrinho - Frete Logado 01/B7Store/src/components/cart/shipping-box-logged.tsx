'use client'

import { getUserAddresses } from "@/actions/get-user-addresses"
import { useAuthStore } from "@/store/auth"
import { useCartStore } from "@/store/cart"
import { Address } from "@/types/address"
import { useEffect, useState, useTransition } from "react"

export const ShippingBoxLogged = () => {
   const { token, hydrated } = useAuthStore(state => state)
   const cartStore = useCartStore(state => state)
   const [addresses, setAddresses] = useState<Address[]>([])
   const [pending, startTransition] = useTransition()

   const handleSelectAddress = () => {

   }

   useEffect(() => {
      if (hydrated && token) {
         startTransition(() => {
            getUserAddresses(token)
               // .then(addresses => setAddresses(addresses))
               .then(setAddresses) // Pega o resultado e passa direto para o setAddresses
         })
      }
   }, [token, hydrated])
   return (
      <div className="flex flex-col gap-4">
         <select
            value={cartStore.selectedAddressId ?? ''}
            onChange={handleSelectAddress}
            className="flex-1 px-6 py-5 bg-white border border-gray-200 rounded-sm">
            <option value="">
               {addresses.length === 0 ? 'Nenhum endereço cadastrado' : 'Selecione um endereço'}
            </option>
            {addresses.map(item => (
               <option key={item.id} value={item.id}>
                  {item.street}, {item.number} - {item.city} ({item.zipcode})
               </option>
            ))}
         </select>

         <button
            onClick={() => { }}
            className="cursor-pointer px-6 py-5 bg-blue-600 text-white border-0 rounded-sm">
            Adicinionar um novo endereço
         </button>
      </div>
   )
}