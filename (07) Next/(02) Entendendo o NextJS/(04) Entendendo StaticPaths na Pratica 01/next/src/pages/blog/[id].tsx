import { Post } from "@/types/Post"

type Props = {
   post: Post
}

const BlogItem = ({ post }: Props) => {
   return(
      <div>
         <h1>Blog</h1>
         <h2>{ post.title }</h2>
         <p>{ post.body }</p>
      </div>
   )
}

export default BlogItem

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

export const getStaticProps = async() => {

}