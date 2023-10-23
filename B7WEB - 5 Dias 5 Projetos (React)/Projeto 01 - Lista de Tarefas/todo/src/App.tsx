import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar Pão na Padaria.', done: false },
    { id: 2, name: 'Comprar um Bolo na Padaria.', done: true }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list] // Clona a Lista
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  //Função feita para tarefa de casa
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list]
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done
      }
    }
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de Adicionar Nova Tarefa */}
        <AddArea onEnter={handleAddTask} />

        {/* Lista de Tarefa */}
        {list.map((item, index) => (
          <ListItem 
            key={index} item={item} 
            onChange={handleTaskChange}
          />
        ))}
      </C.Area>
    </C.Container>
  )
}
export default App