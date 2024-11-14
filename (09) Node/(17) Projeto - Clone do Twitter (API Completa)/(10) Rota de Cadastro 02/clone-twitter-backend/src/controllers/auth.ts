import { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";
import { findUserByEmail, findUserBySlug } from "../services/user";
import slug from "slug";

export const signup: RequestHandler = async(req, res) => {
   // Validar os dados recebidos
   const safeData = signupSchema.safeParse(req.body)

   if(!safeData.success) {
      return res.json({ error: safeData.error.flatten().fieldErrors });
   }

   // Verificar email
   const hasEmail = await findUserByEmail(safeData.data.email)

   if(hasEmail) {
      return res.json({ error: 'Email já cadastrado' });
   }

   // Verificar slug
   let genSlug = true
   let userSlug = slug(safeData.data.name)
   while(genSlug) {
      const hasSlug = await findUserBySlug(userSlug)
      if(hasSlug) {
         let slugSuffix = Math.floor(Math.random() * 999999).toString()
         userSlug = slug(safeData.data.name + slugSuffix)
      } else {
         genSlug = false
      }
   }
   // Cria o usuário
   // Criar o token
   // Retornar o resultados (token, user)
   res.json({  })
}