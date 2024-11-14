import { z } from "zod";

export const authUseOTPSchema = z.object({
   id: z.string({ message: 'ID do OTP é obrigatório' }),
   code: z.string().length(6, 'O código precisa de 6 números')
})