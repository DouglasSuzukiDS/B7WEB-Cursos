import { Cart } from "@/types/cart";
import { create } from "zustand";

type States = {
   cart: Cart[]
}

export const useCartStore = create()(set => ({

}))