import axios from 'axios'

const BASE = 'https://jsonplaceholder.typicode.com'

const http = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
   getAllPosts: async() => {
      /*let response = await fetch(`${BASE}/posts`)
      let json = await response.json()
      return json*/

      /*// Sem o axiosIntance
      let response = await axios.get(`${BASE}/posts`)
      return response.data*/

      let response = await http.get('/posts')
      return response.data
   },

   addNewPost: async (title: string, body: string, userId: number) => {
      /*let response = await fetch(`${BASE}/posts`, {
         method: 'POST',
         body: JSON.stringify({ title, body, userId }),
         headers: { 'Content-Type': 'application/json' }
      })

      let json = await response.json()
      console.log(json)
      return json*/

      /*// Sem o axiosIntance
      let response = await axios.post(`${BASE}/posts`, {
         title, body, userId
      })
      
      console.log(response.data)
      return response.data*/

      let response = await http.post('/posts', {
         title, body, userId
      })
      console.log(response.data)
      return response.data
   }
}