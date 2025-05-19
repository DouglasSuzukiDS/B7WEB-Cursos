import { z } from "zod";

export const authSignupSchema = z.object({
   name: z.string({ message: 'Campo nome é obrigatório' }),
   email: z.string({ message: 'Campo email é obrigatório' }).email('E-mail inválido')
})