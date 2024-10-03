import { z } from "zod";

export const addTweetSchema = z.object({
   body: z.string({ message: 'Necessário enviar o corpo' }),
   answer: z.string().optional()
})