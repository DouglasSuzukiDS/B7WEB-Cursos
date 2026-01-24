import z from "zod";

const unitTypeEnum = z.enum(['kg', 'g', 'l', 'ml', 'un'])

export const createProductSchema = z.object({
   name: z.string().min(1, 'O nome é obrigatório.').max(255),
   categoryId: z.uuid('Formado de ID de categoria inválido.'),
   unitPrice: z.number().int().min(0, 'O preço unitário deve ser positivo.'),
   unitType: unitTypeEnum,
   quantity: z.coerce.number().int().min(0, 'A quantidade deve ser positiva.').default(0).transform(String),
   minimumQuantity: z.coerce.number().int().min(0, 'A quantidade deve ser positiva.').default(0).transform(String),
   maximumQuantity: z.coerce.number().int().min(0, 'A quantidade deve ser positiva.').default(0).transform(String),
})
   .refine((data) =>
      parseFloat(data.maximumQuantity) >= parseFloat(data.minimumQuantity), {
      message: 'A quantidade máxima deve ser maior ou igual à quantidade mínima.',
      path: ['maximumQuantity']
   })

export const updateProductSchema = z.object({
   name: z.string().min(1, 'O nome é obrigatório.').max(255).optional(),
   categoryId: z.uuid('Formado de ID de categoria inválido.').optional(),
   unitPrice: z.number().int().min(0, 'O preço unitário deve ser positivo.').optional(),
   unitType: unitTypeEnum.optional(),
   quantity: z.coerce.number().int().min(0, 'A quantidade deve ser positiva.').default(0).optional().transform(String),
   minimumQuantity: z.coerce.number().int().min(0, 'A quantidade deve ser positiva.').default(0).optional().transform(String),
   maximumQuantity: z.coerce.number().int().min(0, 'A quantidade deve ser positiva.').default(0).optional().transform(String),
})

export const listProductsSchema = z.object({
   name: z.string().min(2, 'Nome do produto muito curto.').optional(),
   offset: z.coerce.number().int().min(0).optional().default(0),
   limit: z.coerce.number().int().min(1).optional().default(10),
})

export const productIdSchema = z.object({
   id: z.uuid('Formato de ID de produto inválido.')
})

