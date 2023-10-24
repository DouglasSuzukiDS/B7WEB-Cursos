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
const result = pattern.parse('Nick')*/

const pattern = z.object({
   name: z.string(),
   age: z.number(),
   active: z.boolean(),
   borthDate: z.date(),
   algo: z.any(),
   nunca: z.never()
})

const result = pattern.parse({
   name: 'Nick'
})

console.log(result)