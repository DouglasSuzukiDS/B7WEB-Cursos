import { deleteCookie, setCookie } from "cookies-next/client";
import { create } from "zustand";

type Store = {
   token: string | null
   open: boolean
   setOpen: (open: boolean) => void
   setToken: (newToken: string | null) => void
}
export const useAuth = create<Store>()(set => ({
   token: null,
   open: false,
   setOpen: (newOpen: boolean) => set(state => ({ ...state, open: newOpen })),
   setToken: (newToken: string | null) => set(state => {
      if (newToken) {
         setCookie('token', newToken)
      } else {
         deleteCookie('token')
      }

      return { ...state, token: newToken };
   })
}))