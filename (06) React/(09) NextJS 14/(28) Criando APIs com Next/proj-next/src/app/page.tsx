import { Posts } from "@/components/posts"
import Link from "next/link"

const Page = () => {

  return(
    <div>
      <h1>Página inicial</h1>

      <Posts />
      
      <Link href={'./tela1'}>Ir para Tela01</Link>
    </div>
  )
}

export default Page