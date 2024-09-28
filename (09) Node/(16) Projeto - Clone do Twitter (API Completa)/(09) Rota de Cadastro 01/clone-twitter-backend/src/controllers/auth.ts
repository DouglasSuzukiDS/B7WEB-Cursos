import { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";

export const signup: RequestHandler = async(req, res) => {
   // Validar os dados recebidos
   const safeData = signupSchema.safeParse(req.body)
   
   if(!safeData.success) {
      return res.json({ error: safeData.error.flatten().fieldErrors });
   }
   // Verificar email
   // Verificar slug
   // Cria o usuário
   // Criar o token
   // Retornar o resultados (token, user)
   res.json({  })
}