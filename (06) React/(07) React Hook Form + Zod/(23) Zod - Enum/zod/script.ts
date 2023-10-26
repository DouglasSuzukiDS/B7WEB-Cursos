import { z } from "zod";
// Para rodar no Temrinal: ts-node script.ts

// Greater Than = GT => gt(NUM)
// Lower Than = LT => lt(NUM)
// Greater Than or Equal = GTE => gte(NUM)
// int => Inteiro
// positive => Positivo
// nonnegative => Não negativo
// negative => Negativo
// nonpositive => Nçao positivo
// multipleOf(NUM) => Multiplo de NUM

const pattern = z.object({
  fuel: z.enum(['Gasoline', 'Etanol', 'Diesel'])
})

const result = pattern.parse({
  fuel: 'Diesel'
})

console.log(result)