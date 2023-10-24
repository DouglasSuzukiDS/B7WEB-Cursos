import { z } from "zod";
// Para rodar no Temrinal: ts-node script.ts

/*const pattern = z.string()
   // string()
   // number()
   // bigint()
   // boolean()
   // date()
   // undefined()
   // null()
   // any() 
   // never()
   // litetal() => Valor esperado
const result = pattern.parse('Nick')*/

// Validation => Regras para validações
/*const pattern = z.object({
   name: z.string().toUpperCase(),
   email: z.string().email().toLowerCase(),
   description: z.string().trim() // Remove os espaços do começo e no final
})

const result = pattern.parse({
   name: 'nick',
   email: 'EMAIl@email.com',
   description: '   alguma coisa  '
})*/

// Transformations => Funções que seram executadas após a validação 
   // min(NUM) => Minimo
   // max(NUM) => Maximo
   // lenght(NUM) => Numero de caractere
   // includes('TERM') => Busca pelo TERM
   // startsWith('TERM') => Inicia com o TERM
   // endsWith('TERM) => Termina com o TERM
const pattern = z.object({
   name: z.string().email(),
   url: z.string().url(),
   emoji: z.string().emoji(),
   id: z.string().uuid(),
   regra: z.string().regex(/[a-z]{2}/g), // 2 letras de a-z,
   image: z.string().startsWith('z_').endsWith('.jpg'),
   ip: z.string().ip()
})

const result = pattern.parse({
   name: 'nick',
})

console.log(result)