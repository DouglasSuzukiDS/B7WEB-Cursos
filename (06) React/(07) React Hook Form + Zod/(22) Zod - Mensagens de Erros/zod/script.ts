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
  email: z.string().email('Email inválido'),
  age: z.number({ 
    required_error: 'Idade é obrigatório',
    invalid_type_error: 'Idade precisa ser um número'
  }).gte(18, 'Precisa ser maior de idade')
})

const result = pattern.parse({
  age: 15
})

console.log(result)