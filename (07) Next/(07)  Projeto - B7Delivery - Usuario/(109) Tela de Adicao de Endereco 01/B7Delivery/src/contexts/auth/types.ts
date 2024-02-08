import { User } from './../../types/User';
import { Dispatch, ReactNode } from "react"

export type DataType = {
   token: string
   user: User | null
}

export type ActionType = {
   type: Actions
   payload?: any
}

export enum Actions {
   SET_TOKEN,
   SET_USER
}

export type ContextType = {
   state: DataType
   dispatch: Dispatch<ActionType>
}

export type ProviderType = {
   children: ReactNode
}