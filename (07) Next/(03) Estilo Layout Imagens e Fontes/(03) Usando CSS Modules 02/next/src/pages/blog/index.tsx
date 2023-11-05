import { Post } from "@/types/Post"

type Props = {
   name: string
   posts: Post[]
}

const Blog = ({ name, posts }: Props) => {
   // console.log(posts)
   return(
      <div>
         <h1>Blog</h1>
         <p>Blog de { name }</p>

         <ul>
            { posts.map((post, index) => (
               <li key={ index }>
                  <a href={`/blog/${post.id}`}>
                     { post.title } 
                  </a>
               </li>
            )) }
         </ul>
      </div>
   )
}

export const getStaticProps = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const posts: Post[] = await res.json()
   // console.log(posts)
   return {
      props: {
         name: 'Nick',
         posts
      },
      revalidate: 7200 // (2H) Se mantem static por esse tempo em segundos. Passando deste tempo faz uma nova requisição 
   }
}

export default Blog