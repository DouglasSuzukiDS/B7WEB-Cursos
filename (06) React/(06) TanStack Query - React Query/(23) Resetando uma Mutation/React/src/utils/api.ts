import { Post } from "@/types/Post"
import axios from 'axios'
import { User } from "./User"

const req = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async(limit: number = 10, start: number = 0): Promise<Post[]> => {
   const result = await req.get(`/posts?_limit=${ limit }&_start=${ start }`)
   // const result = await req.get(`/posts?_limit=10&_start=0`)
   return result.data
}

export const getPost = async(id: number): Promise<Post> => {
   const result = await req.get(`/posts/${ id }`)
   return result.data
}

export const getUsers = async(): Promise<User[]> => {
   const result = await req.get('/users')
   return result.data
}

export const addPost = async(data: Omit<Post, 'id'>) => {
   const result = await req.post('/posts', data)
   return result.data
}