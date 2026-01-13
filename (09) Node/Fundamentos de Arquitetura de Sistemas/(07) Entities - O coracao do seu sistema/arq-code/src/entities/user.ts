import { hashSync } from 'bcryptjs'
import { v4 } from 'uuid'

type CreateUserType = {
   name: string
   email: string
   password: string
}

const hashPassword = (password: string) => {
   return hashSync(password)
}

export const createUser = ({ name, email, password }: CreateUserType) => {
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