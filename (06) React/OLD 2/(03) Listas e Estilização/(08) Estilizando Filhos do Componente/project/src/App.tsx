/* // Importando as estilizações
import { Container } from './components/Container'
import { Botao } from './components/Botao'*/

/* // Inserindo no próprio arquivo
import styled from 'styled-components'

export const Container = styled.div`
  background-color: blue;
  color: white;
  padding: 20px;
`

const Botao = styled.button`
  font-size: 40px;
`*/

/* // Fazendo o import das classes no mesmo arquivo
import { Container, Botao } from './AppStyles'

const App = () => {
  
  return (
    <Container>
      Texto do componente
      <Botao>Clique aqui</Botao>
    </Container>
  )
}*/

import * as C from './AppStyles'

const App = () => {
  
  return (
    <C.Container bgColor='#00F'>
      <span>Texto do componente</span>
      
      <a href="#" className='link'>Link Qualquer</a>

      <C.Botao bg='#F00'>Botão Grande</C.Botao>
      <C.Botao bg='#0F0' small>Botão Pequeno</C.Botao>
    </C.Container>
  )
}

export default App