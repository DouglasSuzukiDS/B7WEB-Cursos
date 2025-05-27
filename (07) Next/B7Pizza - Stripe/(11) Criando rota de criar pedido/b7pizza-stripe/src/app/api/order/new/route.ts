import { getLoggedUserFromHeader } from "@/services/auth"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
   const { cart } = await request.json()
   const loggedUser = await getLoggedUserFromHeader()

   console.log('Cart: ', cart)
   console.log('Logged: ', loggedUser)

   return NextResponse.json({ blabla: true })
}