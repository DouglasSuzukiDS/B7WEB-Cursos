import styles from './styles.module.css'
import EyeOn from './EyeOn.svg'
import EyeOff from './EyeOff.svg'
import { useState } from 'react'

type Props = {
   color: string
   placeholder: string
   value: string
   onChange: (newValue: string) => void
   password?: boolean
   warning?: boolean
}

export const InputField = ({ color, placeholder, value, onChange, password, warning }: Props) => {
   const [showPassword, setShowPassword] = useState(false)
   const [focused, setFocused] = useState(false)

   return(
      <div 
         className={ styles.container }
         style={{ 
            borderColor: !warning ? (focused ? color : '#F9F9FB') : '#F00', 
            backgroundColor: focused ? '#FFF' : '#F9F9Fb'
         }}>
         <input 
            type={ password ? ( showPassword ? 'text' : 'password' ) : 'text' }
            className={ styles.input }
            placeholder={ placeholder }
            value={ value }
            onChange={ e => onChange(e.target.value) }
            onFocus={ () => setFocused(true) } 
            onBlur={ () => setFocused(false) }
         />
         
         { password &&
            <div 
               className={ styles.showPassword }
               onClick={ () => setShowPassword(!showPassword) }>
               { showPassword && <EyeOn color='#BBB'/> }
               { !showPassword && <EyeOff color='#BBB'/> }
            </div>
         }
      </div>
   )
}