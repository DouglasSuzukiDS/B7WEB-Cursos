import { GetStaticProps } from 'next'
import { Post } from "@/types/Post"
import { ParsedUrlQuery } from 'querystring'
import { Layout } from '@/components/layout'

type Props = {
   post: Post
}

const BlogItem = ({ post }: Props) => {
   return(
      <Layout>
         <div>
            <h1>Blog</h1>
            <h2>{ post.title }</h2>
            <p>{ post.body }</p>
         </div>
      </Layout>
   )
}

export default BlogItem

// Roda primeiro e faz o cache (Em produção)
export const getStaticPaths = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const posts: Post[] = await res.json()

   const paths = posts.map(post => ({
      params: {
         id: post.id.toString()
      }
   }))

   // fallback: false => Caso ele não encontrar a rota manda pra pagina 404
      // true => Renderiza outro componente caso ela existir e salva no cache
      // 'blocking' => Caso a rota nao esteja no cache ele faz a requisição no getStaticProps para pegar o post e salva no cache
   return { paths, fallback: false }
}

interface IParams extends ParsedUrlQuery {
   id: string
}

export const getStaticProps: GetStaticProps = async(context) => {
   const { id } = context.params as IParams

   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`)
   const post = await res.json()

   return {
      props: {
         post
      }
   }
}