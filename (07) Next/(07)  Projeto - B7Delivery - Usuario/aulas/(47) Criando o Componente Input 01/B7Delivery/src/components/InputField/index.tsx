import styles from './styles.module.css'

type Props = {
   color: string
   placeholder: string
   value: string
   onChange: (newValue: string) => void
   password?: boolean
}

export const InputField = ({ color, placeholder, value, onChange, password }: Props) => {
   return(
      <div className={ styles.container }>
         <input 
            type={ password ? 'password' : 'text' }
            className={ styles.input }
            placeholder={ placeholder }
            value={ value }
            onChange={ e => onChange(e.target.value) } 
         />
      </div>
   )
}