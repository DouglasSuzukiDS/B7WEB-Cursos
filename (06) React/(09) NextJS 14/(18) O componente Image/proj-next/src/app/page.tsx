import Image from "next/image"
import Link from "next/link"

const Page = () => {
  // Link => É usuado em componentes
  // useRouter => É usado somente em CLIENT COMPONENTS
  // redirect => É usado em SERVER COMPONENTS 
  return(
    <div>
      <h1>Página inicial</h1>
      {/* <img src="/assets/LuffyGear5.png" alt="Luffy Gear 5" /> // Carrega a imagem total, mesmo que você queira exibir em um tamanho menor */}
      <Image
        src={'/assets/LuffyGear5.png'}
        alt="Luffy Gear 5"
        width={ 200 } // A imagem pega um tamanho superior para ajuste
        height={ 100 }
        quality={ 100 }
      />

      <Image
        src={'https://www.google.com.br/google.jpg'}
        alt="Imagem do logo do Google"
        width={ 200 } // A imagem pega um tamanho superior para ajuste
        height={ 100 }
        quality={ 100 }
      />

      <Link href={'./tela1'}>Ir para Tela01</Link>
    </div>
  )
}

export default Page