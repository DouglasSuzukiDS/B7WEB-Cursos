import { receberDados } from "@/actions/receber-dados"
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

      {/* <PostsClient /> */}

      {/* ServerActions
        Exemplo: Criar uma função que consulta o banco de dados.

          => Como funciona no Servidor? 
            => Pasata criar uma a pasta actions, o arquivo que vai executar a requisição, inserir 'use server' e criar a função fazendo a requisição.

          => Como funciona no Client? 
            => Ao executar uma função ServerActions, o Next requisita o próprio projeto madando executar aquela função e devolve o resultado para a aplicação.
      */}

      <form action={ receberDados }>
        <input className="text-black" type="text" name="name" placeholder="Digite seu nome" />
        <input className="text-black" type="number" name="age" placeholder="Digite sua idade" />

        <input type="submit" value='Enviar' />
      </form>
      
      <Link href={'./tela1'}>Ir para Tela01</Link>
    </div>
  )
}

export default Page