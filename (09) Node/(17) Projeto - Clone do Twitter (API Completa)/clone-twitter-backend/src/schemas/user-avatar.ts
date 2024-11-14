import { z } from "zod";

export const userAvatarSchema = z.object({
   slug: z.string(),
   newAvatar: z.string().url('O avatar precisa conter um endereço válido'),
})