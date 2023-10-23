import styles from './styles.module.css'

export const Botao = () => {
   return(
      <div className={styles.square}>
         <button className={styles.botao}>Texto Qualquer</button>
         <p className={styles.legend}>Legenda</p>
      </div>
   )
}