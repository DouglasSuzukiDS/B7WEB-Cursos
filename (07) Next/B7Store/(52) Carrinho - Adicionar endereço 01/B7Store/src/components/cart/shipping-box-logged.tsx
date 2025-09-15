'use client'

import { getShippingInfo } from "@/actions/get-shipping-info"
import { getUserAddresses } from "@/actions/get-user-addresses"
import { useAuthStore } from "@/store/auth"
import { useCartStore } from "@/store/cart"
import { Address } from "@/types/address"
import { ChangeEvent, useEffect, useState, useTransition } from "react"
import { AddressModal } from "./address-modal"

export const ShippingBoxLogged = () => {
   const { token, hydrated } = useAuthStore(state => state)
   const cartStore = useCartStore(state => state)
   const [addresses, setAddresses] = useState<Address[]>([])
   const [modalOpened, setModalOpened] = useState(false)
   const [pending, startTransition] = useTransition()

   const handleSelectAddress = async (e: ChangeEvent<HTMLSelectElement>) => {
      cartStore.clearShipping()
      const id = parseInt(e.target.value)

      if (id) {
         const address = addresses.find(item => item.id === id)
         if (address) {
            cartStore.setShippingZipcode(address.zipcode)

            cartStore.setSelectedAddressId(id)
         }
      }
   }

   const updateShippingInfo = async () => {
      if (cartStore.shippingZipcode.length > 4) {
         const shippingInfo = await getShippingInfo(cartStore.shippingZipcode)

         if (shippingInfo) {
            cartStore.setShippingCost(shippingInfo.cost)
            cartStore.setShippingDays(shippingInfo.days)
         }
      }
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

   useEffect(() => {
      if (cartStore.selectedAddressId) {
         updateShippingInfo()
      }
   }, [cartStore.selectedAddressId, cartStore.setShippingDays])

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
            onClick={() => setModalOpened(true)}
            className="cursor-pointer border-0">
            Adicinionar um novo endereço
         </button>


         <AddressModal
            open={modalOpened}
            onClose={() => setModalOpened(false)} />
      </div>
   )
}