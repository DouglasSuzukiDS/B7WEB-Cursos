import { Post } from "@/types/Post"
import axios from 'axios'
import { User } from "./User"

const req = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async(): Promise<Post[]> => {
   const result = await req.get('/posts')
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