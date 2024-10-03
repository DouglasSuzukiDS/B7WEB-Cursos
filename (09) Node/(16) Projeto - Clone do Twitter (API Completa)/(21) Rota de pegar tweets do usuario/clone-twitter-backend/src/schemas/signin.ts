import { z } from "zod";

export const signinSchema = z.object({
   email: z.string({ message: 'O email é obrigatório' }).email('Email inválido'),
   password: z.string({ message: 'A senha é obrigatório' }).min(4, 'A senha recisa ter 4 ou mais caracteres'),   
})