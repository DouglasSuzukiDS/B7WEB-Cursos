import { RequestHandler } from "express";
import { getPublishedPosts } from "../services/post";
import { coverToUrl } from "../utils/covert-to-url";

export const getAllPosts: RequestHandler = async (req, res) => {
   let page = 1

   if (req.query.page) {
      page = parseInt(req.query.page as string)
   }

   if (page <= 0) {
      res.json({ error: 'Página inexistente' })
      return
   }

   let posts = await getPublishedPosts(page)

   const postsToReturn = posts.map(post => ({
      id: post.id,
      status: post.status,
      title: post.title,
      createdAt: post.createdAt,
      cover: coverToUrl(post.cover),
      authorName: post.author?.name,
      tags: post.tags,
      slug: post.slug
   }))

   res.json({ posts: postsToReturn, page })
}

export const getPost: RequestHandler = async (req, res) => {

}

export const getRelatedPosts: RequestHandler = async (req, res) => {

}