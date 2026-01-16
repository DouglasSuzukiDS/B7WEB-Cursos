import type { User } from "../../entities/user";
import type { UserRepository } from "../../ports/user-repository";

export const createInMemoryUserRepository = (initialUsers: User[] = []): UserRepository => {
   const users: User[] = [...initialUsers]

   return {
      findByEmail: async (email: string) => {
         return users.find(user => user.email === email) || null
      },

      save: async (user: User) => {
         users.push(user)
      }
   }
} 