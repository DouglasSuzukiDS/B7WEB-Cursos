import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'

type Props = {
   onAdd: (item: Item) => void
}  

export const InputArea = ({ onAdd }: Props) => {

   const [getDate, setDate] = useState('')
   const [getCategory, setCategory] = useState('')
   const [getTitle, setTitle] = useState('')
   const [getValue, setValue] = useState('')

   const handleAddEvent = () => {
      let newItem: Item = {
         // date: new Date(2021, 9, 27),
         // category: 'food',
         // title: 'Podrão',
         // value: 250.25

         date: new Date(getDate),
         category: getCategory,
         title: getTitle,
         value: parseInt(getValue)

      }
      onAdd(newItem)
      // console.log(newItem)
   }

   function itemCategory() {
      let select = document.querySelector('select')
      let option = select?.options[select.selectedIndex]
   }

   return (
      <C.Container>
         <form>

            <input 
               type="text" name='date' 
               required
               value = { getDate }
               onChange = { e => (setDate(e.target.value)) }
            />

            <select 
               name='category' 
               required
               value = { getCategory }
               onChange = { e => setCategory(e.target.value) }
            >
               <option value="DEFAULT">Selecione a Categoria</option>
               <option value="food">Alimentação</option>
               <option value="rent">Aluguel</option>
               <option value="salary">Salário</option>
            </select>

            <input 
               type="text" name='title' 
               placeholder='Título' 
               required 
               value = { getTitle }
               onChange = {  e => setTitle(e.target.value) } />

            <input 
               type="text" name='value' 
               placeholder='Informe o Valor' 
               required
               value = { getValue }  
               onChange = { e => setValue(e.target.value) } 
            />

            <button onClick={handleAddEvent}>
               Adicionar
            </button>
         </form>
      </C.Container>
   )
}