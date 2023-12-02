import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
   secret: process.env.NEXTAUTH_SECRET,
   providers: [
      CredentialsProvider({
         id: 'credentials',
         credentials: {
            email: { label: 'Email', type: 'text' },
            password: { label: 'Senha', type: 'password' }
         },
         authorize: async(credentials, req) => {
            if(credentials?.email === 'nick@email.com') {
               const user = {
                  id: 123,
                  name: 'Nick',
                  email: 'nick@email.com',
                  role: 'USER'
               }

               return user
            }
            return null
         }
      })
   ]
}

export default NextAuth(authOptions)