import { createUser } from "../entities/user"
import { UserRepository } from "../ports/user-repository"

type RegisterUserInout = {
   name: string
   email: string
   password: string
}

export const registerUser = async (input: RegisterUserInout, repository: UserRepository) => {
   const exists = await repository.findByEmail(input.email)

   if (exists) {
      throw new Error('User email already exists')
   }

   const user = createUser(input)

   await repository.save(user)
}