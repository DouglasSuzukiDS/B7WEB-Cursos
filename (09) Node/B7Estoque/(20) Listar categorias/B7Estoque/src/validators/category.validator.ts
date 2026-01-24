import z from "zod";

export const createCategorySchema = z.object({
   name: z.string().min(1, 'O nome é obrigatório.').max(255),
})

export const listCategoriesSchema = z.object({
   includeProductCount: z.coerce.boolean().optional().default(false)
})