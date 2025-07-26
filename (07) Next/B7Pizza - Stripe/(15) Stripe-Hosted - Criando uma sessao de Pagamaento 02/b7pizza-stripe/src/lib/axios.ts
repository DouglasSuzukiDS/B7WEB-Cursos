import axios from "axios";
import { getCookie } from "cookies-next/client";

export const api = axios.create({
   baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
})

export const apithWithAuth = axios.create({
   baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`
})

apithWithAuth.interceptors.request.use(async config => {
   const token = getCookie('token')

   if(token) {
      config.headers.Authorization = `Token ${token}`
   }

   return config
})