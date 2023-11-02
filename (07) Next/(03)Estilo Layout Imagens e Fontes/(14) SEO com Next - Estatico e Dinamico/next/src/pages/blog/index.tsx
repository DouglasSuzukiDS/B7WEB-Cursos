import { Layout } from "@/components/layout"
import { Post } from "@/types/Post"
import Head from "next/head"

type Props = {
   name: string
   posts: Post[]
}

const Blog = ({ name, posts }: Props) => {
   // console.log(posts)
   return (
      <Layout>
         <div>
            <Head>
               <title>Blog</title>
               <meta name="title" content="Blog" />
               <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />

               <meta property="og:type" content="website" />
               <meta property="og:url" content="https://metatags.io/" />
               <meta property="og:title" content="Blog" />
               <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
               <meta property="og:image" content="https:/localhost:3000/Harry.png" />

               <meta property="twitter:card" content="summary_large_image" />
               <meta property="twitter:url" content="https://metatags.io/" />
               <meta property="twitter:title" content="Blog" />
               <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
               <meta property="twitter:image" content="https:/localhost:3000/Harry.png" />

               {/* https://metatags.io => Site para montar MetaTags */}

            </Head>

            <h1>Blog</h1>
            <p>Blog de {name}</p>

            <ul>
               {posts.map((post, index) => (
                  <li key={index}>
                     <a href={`/blog/${post.id}`}>
                        {post.title}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </Layout>
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