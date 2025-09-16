import { Product } from "@/generated/prisma"
import { create } from "zustand"

type Store =  {
   products: Product[]
   setroducts: (products: Product[]) => void
}

export const useProducts = create<Store>((set) => ({
   products: [],
   setroducts: (products: Product[]) => set({ products }),
}))