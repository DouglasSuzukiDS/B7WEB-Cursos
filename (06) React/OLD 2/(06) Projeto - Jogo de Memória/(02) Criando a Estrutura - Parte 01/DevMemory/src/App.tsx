import * as C from './App.styles'
import logoImg from './assets/devmemory_logo.png'

const App = () => {
  return(
    <C.Container>

      <C.Info>

        <C.LogoLink href=''>
          <img src={logoImg} width='200' alt='Logo' />
        </C.LogoLink>

        <C.InfoArea>
          ***
        </C.InfoArea>

        <button>Reiniciar</button>

      </C.Info>

      <C.GridArea>
        ***
      </C.GridArea>

    </C.Container>
  )
}

export default App