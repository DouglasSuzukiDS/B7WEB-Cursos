import { Address } from "@/types/Address"
import { Tenant } from "@/types/Tenant"
import { Dispatch, ReactNode } from "react"

export type DataType = {
   tenant: Tenant | null
   shippingAddress: Address | null
   shippingPrice: number
}

export type ActionType = {
   type: Actions
   payload?: any
}

export enum Actions {
   SET_TENANT,
   SET_SHIPPING_ADDRESS,
   SET_SHIPPING_PRICE
}

export type ContextType = {
   state: DataType
   dispatch: Dispatch<ActionType>
}

export type ProviderType = {
   children: ReactNode
}