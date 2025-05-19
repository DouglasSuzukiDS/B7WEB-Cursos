import { RequestHandler, Response } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { z } from "zod";
import { createPostSlug, handleCover } from "../services/post";

export const addPost = async (req: ExtendedRequest, res: Response) => {
   if (!req.user) return

   const schema = z.object({
      title: z.string(),
      tags: z.string(),
      body: z.string()
   })

   const data = schema.safeParse(req.body)

   if (!data.success) {
      res.json({ error: data.error.flatten().fieldErrors })
      return
   }

   if (!req.file) {
      res.json({ error: 'Sem arquivo' })
      return
   }

   // Lidar com o arquivo
   const coverName = await handleCover(req.file)

   if(!coverName) {
      res.json({ error: 'Imagem não permitida/enviada' })
      return 
   }

   // Criar o slug do post
   const slug = await createPostSlug(data.data.title)
   
   // Criar o post
   // Pegar informação do autor
   // Fazer retornor segundo o plano
}

export const getPosts: RequestHandler = async (req, res) => {

}

export const getPost: RequestHandler = async (req, res) => {

}

export const editPost: RequestHandler = async (req, res) => {

}

export const removePost: RequestHandler = async (req, res) => {

}