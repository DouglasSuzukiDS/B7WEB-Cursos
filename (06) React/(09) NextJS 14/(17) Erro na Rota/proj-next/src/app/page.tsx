import Link from "next/link"

const Page = () => {
  // Link => É usuado em componentes
  // useRouter => É usado somente em CLIENT COMPONENTS
  // redirect => É usado em SERVER COMPONENTS 
  return(
    <div>
      <h1>Página inicial</h1>

      <Link href={'./tela1'}>Ir para Tela01</Link>
    </div>
  )
}

export default Page