
import { signupSchema } from "../schemas/signup";
import { createUser, findUserByEmail, findUserBySlug } from "../services/user";
import slug from "slug";
import { compare, hash } from "bcrypt-ts";
import { createJWT } from "../utils/jwt";
import { RequestHandler } from "express";
import { signinSchema } from "../schemas/signin";

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

   // Gerar o hash de Senha
   const hashPassword = await hash(safeData.data.password, 10)

   // Cria o usuário
   const newUser = await createUser({
      slug: userSlug,
      name: safeData.data.name,
      email: safeData.data.email,
      password: hashPassword
   })

   // Criar o token
   const token = createJWT(userSlug)
   console.log(createJWT(userSlug))

   // Retornar o resultados (token, user)
   res.status(201).json({ 
      token,
      user: {
         name: newUser.name,
         slug: newUser.slug,
         avatar: newUser.avatar
      }
   })
}

export const signin: RequestHandler = async(req, res) => {
   // Validar os dados recebidos
   const safeData = signinSchema.safeParse(req.body)

   if(!safeData.success) {
      return res.json({ error: safeData.error.flatten().fieldErrors });
   }
   
   // Verificar email
   const user = await findUserByEmail(safeData.data.email)
   if(!user) return res.status(401).json({ error: 'Acesso negado' });
   
   // Verificar senha
   const verifyPass = await compare(safeData.data.password, user.password)

   if(!verifyPass) return res.send(401).json({ error: 'Acesso negado' })

   // Criar o token
   const token = createJWT(user.slug)
   
   // Retornar os dados
   res.status(200).json({ 
      token,
      user: {
         name: user.name,
         slug: user.slug,
         avatar: user.avatar
      }
   })
}