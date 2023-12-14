import { useEffect, useState } from 'react'
import * as C from './App.styles'
import logoImg from './assets/devmemory_logo.png'
import RestartIcon from './assets/svgs/restart.svg'
import { Button } from './components/Button'
import { InfoItem } from './components/InfoItem'
import { items } from './data/Items'
import { GridItemType } from './types/GridItemType'

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [timeSlapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [shownCount, setShownCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(() => resetAndCreateGrid() , [])

  const resetAndCreateGrid = () => {
    // Passo 1 - Resetar o jogo
    setTimeElapsed(0)
    setMoveCount(0)
    setShownCount(0)

    // Passo 2 - Criar o Grid e começar o Jogo
      // 2.1 - Criar umGrid vazio
      let tmpGrid: GridItemType[] = []

      for(let i = 0; i < (items.length * 2); i++) {
        tmpGrid.push({
          item: null, shown: false, permanentShown: false
        })
      }

      // 2.2 - Preencher o Grid
      

      // 2.3 - Jogar no State
      setGridItems(tmpGrid)

    // Passo 3 - Começar o jogo
    setPlaying(true)
  }

  return(
    <C.Container>

      <C.Info>

        <C.LogoLink href=''>
          <img src={logoImg} width='200' alt='Logo' />
        </C.LogoLink>

        <C.InfoArea>

          <InfoItem label='Tempo' value='00:00' />

          <InfoItem label='Movimentos' value='0' />

        </C.InfoArea>

        <Button label='Reiniciar' icon={ RestartIcon } onClick={ resetAndCreateGrid } />

      </C.Info>

      <C.GridArea>
        <C.Grid>

        </C.Grid>
      </C.GridArea>

    </C.Container>
  )
}

export default App