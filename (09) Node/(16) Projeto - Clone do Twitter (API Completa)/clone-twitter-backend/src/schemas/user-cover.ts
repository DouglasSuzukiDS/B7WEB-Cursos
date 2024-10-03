import { z } from "zod";

export const userCoverSchema = z.object({
   slug: z.string(),
   newCover: z.string()
})