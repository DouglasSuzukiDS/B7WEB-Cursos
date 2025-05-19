import { RequestHandler, Response } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { z } from "zod";
import { createPost, createPostSlug, getPostBySlug, handleCover, updatePost } from "../services/post";
import { getUserById } from "../services/user";
import { coverToUrl } from "../utils/covert-to-url";

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

   if (!coverName) {
      res.json({ error: 'Imagem não permitida/enviada' })
      return
   }

   // Criar o slug do post
   const slug = await createPostSlug(data.data.title)

   // Criar o post
   const newPost = await createPost({
      authorId: req.user.id,
      slug,
      title: data.data.title,
      tags: data.data.tags,
      body: data.data.body,
      cover: coverName,
   })

   // Pegar informação do autor
   const author = await getUserById(newPost.id)

   // Fazer retornor segundo o plano
   res.json({
      post: {
         id: newPost.id,
         slug: newPost.slug,
         title: newPost.title,
         createdAt: newPost.createdAt,
         cover: coverToUrl(newPost.cover),
         tags: newPost.tags,
         author: author?.name
      }
   })
}

export const getPosts: RequestHandler = async (req, res) => {

}

export const getPost: RequestHandler = async (req, res) => {

}

export const editPost = async (req: ExtendedRequest, res: Response) => {
   const { slug } = req.params

   const schema = z.object({
      status: z.enum(['PUBLISHED', 'DRAFT']).optional(),
      title: z.string().optional(),
      tags: z.string().optional(),
      body: z.string().optional(),
   })

   const data = schema.safeParse(req.body)

   if (!data.success) {
      res.json({ error: data.error.flatten().fieldErrors })
      return
   }

   const post = await getPostBySlug(slug)

   if (!post) {
      res.json({ error: 'Post inexistente' })
      return
   }

   let coverName: string | false = false

   if (req.file) {
      coverName = await handleCover(req.file)
   }

   const updatedPost = await updatePost(slug, {
      updateAt: new Date(),
      status: data.data.status ?? undefined,
      title: data.data.title ?? undefined,
      tags: data.data.tags ?? undefined,
      body: data.data.body ?? undefined,
      cover: coverName ? coverName : undefined
   })

   const author = await getUserById(updatedPost
      .authorId
   )

   res.json({
      post: {
         id: updatedPost.id,
         status: updatedPost.status,
         title: updatedPost.title,
         createdAt: updatedPost.createdAt,
         cover: coverToUrl(updatedPost.cover),
         tags: updatedPost.tags,
         authorName: author?.name,
      }
   })
}

export const removePost: RequestHandler = async (req, res) => {

}