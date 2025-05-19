import { z } from "zod";

export const authSigninSchema = z.object({
   email: z.string({ message: 'Campo e-mail é obrigatório' }).email('E-mail inválido')
})