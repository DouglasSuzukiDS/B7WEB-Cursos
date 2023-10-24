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

const pattern = z.object({
   name: z.literal('nick'),
   age: z.literal(90)
})

const result = pattern.parse({
   name: 'nick',
   age: 90
})

console.log(result)