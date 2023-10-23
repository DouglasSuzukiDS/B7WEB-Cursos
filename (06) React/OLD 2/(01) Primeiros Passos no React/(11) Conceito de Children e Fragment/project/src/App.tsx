import { Header } from "./components/Header"
import { Photo } from "./components/Photo"

const App = () => {
  return (
    <div>
      <Header title='Este é um exemplo' />
      <Header title='Outro texto' />
      <Header />

      Hello World

      {/* <Photo url='http://www.google.com.br/google.jpg' legend='Google' /> */}

      {/* Quando se tem elemento passado dentro do Componente chamamos de children que precisa se importar ReactNode */}
      <Photo legend='Google'> 
        <img src="http://www.google.com.br/google.jpg" alt="" />
      </Photo>
    </div>
  )
}

export default App