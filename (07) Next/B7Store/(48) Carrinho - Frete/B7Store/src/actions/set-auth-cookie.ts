'use server'

import { setServerAuthToken } from "@/libs/server-cookies"

export const setAuthToken = async (token: string) => {
   await setServerAuthToken(token)
}