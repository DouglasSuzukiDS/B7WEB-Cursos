import { useEffect, useState } from 'react'
import * as C from './App.styles'
import logoImg from './assets/devmemory_logo.png'
import RestartIcon from './assets/svgs/restart.svg'
import { Button } from './components/Button'
import { InfoItem } from './components/InfoItem'
import { GridItemType } from './types/GridItemType'

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [timeSlapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMovoCount] = useState<number>(0)
  const [shownCount, setShownCount] = useState<number>(0)
  const [gridItems, stGridItems] = useState<GridItemType[]>([])

  useEffect(() => resetAndCreateGrid() , [])

  const resetAndCreateGrid = () => {

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