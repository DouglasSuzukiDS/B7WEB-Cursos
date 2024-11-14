import { RequestHandler } from "express";
import { authSigninSchema } from "../schemas/auth-signin";
import { createUser, getUserByEmail } from "../services/user";
import { generateOTP } from "../services/otp";
import { sendEmail } from "../libs/mailtrap";
import { authSignupSchema } from "../schemas/auth-signup";

export const signin: RequestHandler = async (req, res) => {
   // Validar os dados recebidos
   const data = authSigninSchema.safeParse(req.body)

   if (!data.success) {
      res.json({ error: data.error.flatten().fieldErrors })

      return
   }

   // Verificar o usuário existe baseado no email
   const user = await getUserByEmail(data.data.email)

   if (!user) {
      res.json({ error: 'Usuário não existe' })

      return
   }

   // Gerar um código OTP para esta usuário
   const otp = await generateOTP(user.id)

   // Enviar um email para o usuário com o código
   await sendEmail(
      user.email,
      `Seu código de acesso é ${otp.code}`,
      `Digite seu código ${otp.code}`
   )

   // Devolver o ID no codigo OTP
   res.json({ id: otp.id })
}

export const signup: RequestHandler = async (req, res) => {
   // Validar os dados recebidos
   const data = authSignupSchema.safeParse(req.body)

   if (!data.success) {
      res.json({ error: data.error.flatten().fieldErrors })

      return
   }

   // Verifica se o email ja existe
   const user = await getUserByEmail(data.data.email)

   if (user) {
      res.json({ error: 'Já existe um usuário com este e-mail' })

      return
   }

   // Criar o usuário
   const newUser = await createUser(data.data.name, data.data.email)

   // Retornar os dados do usuário recem criado
   res.status(201).json({ user: newUser })
}