import { User } from '../entities/user'

export type UserRepository = {
   findByEmail: (email: string) => Promise<User | null>
   save: (user: User) => Promise<void>
}