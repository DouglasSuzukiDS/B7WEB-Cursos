import { createInMemoryUserRepository } from "../tests/ports/in-memory-user-repository"
import { registerUser } from "./register-user.use-case"

describe('Register User Use Case', () => {
   it('should register a new user successfully', async () => {
      const userRepository = createInMemoryUserRepository()

      const input = {
         name: 'Nick',
         email: 'nick@email.com',
         password: '123456'
      }

      await registerUser(input, userRepository)

      const savedUser = await userRepository.findByEmail(input.email)
      expect(savedUser).toBeDefined()
      expect(savedUser?.name).toBe(input.name)
   })

   it('should throw an error if user already exists', async () => {
      const userRepository = createInMemoryUserRepository([
         {
            id: '123',
            name: 'User',
            email: 'user@email.com',
            passwordHash: '123',
            createdAt: new Date()
         }
      ])

      const input = {
         name: 'Nick',
         email: 'user@email.com',
         password: '123'
      }

      await expect(registerUser(input, userRepository))
         .rejects.toThrow('User email already exists')
   })
})