import { z } from "zod";

export const signupSchema = z.object({
   name: z.string({ message: 'O nome é obrigatório' }).min(2, 'O nome precisa ter 2 ou mais caracteres'),
   email: z.string({ message: 'O email é obrigatório' }).email('Email inválido'),
   password: z.string({ message: 'A senha é obrigatório' }).min(4, 'A senha recisa ter 4 ou mais caracteres'),   
})