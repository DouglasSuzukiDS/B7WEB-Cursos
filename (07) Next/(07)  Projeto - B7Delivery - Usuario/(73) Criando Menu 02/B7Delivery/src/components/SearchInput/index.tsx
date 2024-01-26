import { KeyboardEvent, useState } from 'react'
import styles from './SearchInput.module.css'
import SearchIcon from './searchIcon.svg'
import { useAppContext } from '@/contexts/app'
type Props = {
   // mainColor: string
   onSearch: (searchValue: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
   const { tenant } = useAppContext()

   const [focused, setFocused] = useState(false)
   const [searchValue, setSearchValue] = useState('')

   const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
      if(event.code === 'Enter') {
         onSearch(searchValue)
      }
   }

   return(
      <div 
         className={ styles.container }
         style={{ borderColor: focused ? tenant?.mainColor: '#FFF' }}>
         <div 
            className={ styles.button }
            onClick={ () => onSearch(searchValue) } >
            
            <div style={{ width: '32px', height: '32px' }}>
               <SearchIcon color={ tenant?.mainColor } />
            </div>
         </div>

         <input 
            type="text" 
            placeholder='Digite o nome do produto'
            onFocus={ () => setFocused(true) }
            onBlur={ () => setFocused(false) }
            className={ styles.input } 
            onKeyUp={ handleKeyUp } 
            value={ searchValue } 
            onChange={ (e) => setSearchValue(e.target.value) }/>
      </div>
   )
}

export default SearchInput