import { RequestHandler } from "express";
import { authSigninSchema } from "../schemas/auth-signin";
import { getUserByEmail } from "../services/user";

export const signin: RequestHandler = async(req, res) => {
   // Validar os dados recebidos
   const data = authSigninSchema.safeParse(req.body)

   if(!data.success) {
      res.json({ error: data.error.flatten().fieldErrors })

      return
   }

   // Verificar o usuário existe baseado no email
   const user = await getUserByEmail(data.data.email)
   
   if(!user) {
      res.json({ error: 'Usuário não existe' })
      return
   }

   // Gerar um código OTP para esta usuário
   // Enviar um email para o usuário com o código
   // Devolver o ID no codigo OTP
}