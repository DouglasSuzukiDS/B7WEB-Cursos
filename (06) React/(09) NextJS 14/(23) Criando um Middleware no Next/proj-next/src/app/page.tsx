import { Posts } from "@/components/posts"
import { PostsClient } from "@/components/posts-client"
import Link from "next/link"

const Page = () => {
  // Link => É usuado em componentes
  // useRouter => É usado somente em CLIENT COMPONENTS
  // redirect => É usado em SERVER COMPONENTS 
  return(
    <div>
      {/* { next: { revalidate: 3600 } } => Mantém em cache com volta
        14: Todas as requisições são CACHEADAS por padrão
          { cache: 'no-store' } => Não salva em cache

        15: Nenhuma requisição é CACHEADA por padrão
          { cache: 'force-cache' } => Salva em cache

        Em APIs: 
        14: GET => São CACHEADAS por padrão
        15: GET => Não são CACHEADAS por padrão
      */}
      <h1>Página inicial</h1>

      <Posts />
      
      <Link href={'./tela1'}>Ir para Tela01</Link>
    </div>
  )
}

export default Page