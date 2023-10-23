'use client'

const Title = ({ label }: { label: string }) => {
  return(
    <h1 className="text-4xl font-bolt my-4">{ label }</h1>
  )
}

const Subtitle = ({ label }: { label: string }) => {
  return(
    <p>{ label }</p>
  )
}

const Header = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return(
    <header>
      <Title label={ title }/>
      <Subtitle label={ subtitle } />
    </header>
  )
}

const Page = () => {
  const pageInfo = {
    title: 'Titulo da pagina',
    subtitle: 'Subtitulo da pagina'
  }

  return (
    // Context: Permite que a informação seja passada para todos os componentes que o componente pai emgloba
    <div className="container mx-auto">
      <Header title={ pageInfo.title } subtitle={ pageInfo.subtitle } />
    </div>
  )
}

export default Page