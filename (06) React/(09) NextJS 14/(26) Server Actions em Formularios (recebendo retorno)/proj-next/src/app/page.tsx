import { receberDados } from "@/actions/receber-dados"
import { Form } from "@/components/form"
import Link from "next/link"

const Page = () => {

  return(
    <div>
      <h1>Página inicial</h1>

      {/* <PostsClient /> */}

      {/* ServerActions
        Exemplo: Criar uma função que consulta o banco de dados.

          => Como funciona no Servidor? 
            => Pasata criar uma a pasta actions, o arquivo que vai executar a requisição, inserir 'use server' e criar a função fazendo a requisição.

          => Como funciona no Client? 
            => Ao executar uma função ServerActions, o Next requisita o próprio projeto madando executar aquela função e devolve o resultado para a aplicação.
      */}

      <Form />
      
      <Link href={'./tela1'}>Ir para Tela01</Link>
    </div>
  )
}

export default Page