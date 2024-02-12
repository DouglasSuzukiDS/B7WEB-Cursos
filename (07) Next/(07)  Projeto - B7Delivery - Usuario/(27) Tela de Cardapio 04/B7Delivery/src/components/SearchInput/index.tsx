import styles from './SearchInput.module.css'

const SearchInput = () => {
   return(
      <div className={ styles.container }>
         <div className={ styles.button }>

         </div>

         <input 
            type="text" 
            placeholder='Digite o nome do produto'
            className={ styles.input } />
      </div>
   )
}

export default SearchInput