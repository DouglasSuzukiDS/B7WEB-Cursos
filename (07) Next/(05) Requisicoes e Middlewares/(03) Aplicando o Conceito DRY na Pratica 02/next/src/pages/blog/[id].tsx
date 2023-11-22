import { GetStaticProps } from 'next'
import { Post } from "@/types/Post"
import { ParsedUrlQuery } from 'querystring'
import { Layout } from '@/components/layout'
import Head from 'next/head'

type Props = {
   post: Post
}

const BlogItem = ({ post }: Props) => {
   return(
      <Layout>
         <div>
         <Head>
               <title>Blog</title>
               <meta name="title" content={ post.title } />
               <meta name="description" content={ post.body } />

               <meta property="og:type" content="website" />
               <meta property="og:url" content={ `https://localhost:3000/blog/${post.id}` } />
               <meta property="og:title" content={ post.title } />
               <meta property="og:description" content={ post.body } />
               <meta property="og:image" content="https:/localhost:3000/Harry.png" />

               <meta property="twitter:card" content="summary_large_image" />
               <meta property="twitter:url" content={ `https://localhost:3000/blog/${post.id}` } />
               <meta property="twitter:title" content={ post.title } />
               <meta property="twitter:description" content={ post.body } />
               <meta property="twitter:image" content="https:/localhost:3000/Harry.png" />

               {/* https://metatags.io => Site para montar MetaTags */}

            </Head>

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