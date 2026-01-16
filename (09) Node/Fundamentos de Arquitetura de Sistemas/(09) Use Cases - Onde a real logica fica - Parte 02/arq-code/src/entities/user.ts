import { hashSync } from 'bcryptjs'
import { v4 } from 'uuid'

export type User = {
   id: string
   name: string
   email: string
   passwordHash: string
   createdAt: Date
}

type CreateUserType = {
   name: string
   email: string
   password: string
}

const hashPassword = (password: string) => {
   return hashSync(password)
}

export const createUser = ({ name, email, password }: CreateUserType): User => {
   const id = v4()
   const passwordHash = hashPassword(password)
   const createdAt = new Date()

   return Object.freeze({
      id,
      name,
      email,
      passwordHash,
      createdAt
   })
}