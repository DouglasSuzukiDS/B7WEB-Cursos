import { useHistory, Link } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'

export const FormStep4 = () => {
   const history = useHistory()
   const { state, dispatch } = useForm()

   useEffect(() => {
      if(state.name === '') {
         history.push('/')
      } else {
         dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
         })
      }
   }, [])


   const handleNextStep = () => {
      if(state.email !== '' && state.github !== ''){
         console.log(state)
         alert(`
            Nome: ${state.name} 
            Nivel: ${level()} 
            Email: ${state.email} 
            GitHub: ${state.github}
         `)
      } else {
         alert('Preencha os campos com os Dados Solicitados, Jaguara')
      }
   }

   const level = () => {
      let level = state.level
      if(level === 0) {
         return 'Iniciante' 
      } else{ 
         return 'Programador(a) com + 2 anos de experiência'
      } 
   }

   const setLevel = (level: number) => {
      dispatch({
         type: FormActions.setLevel,
         payload: level
      })
   }

   return (
      <Theme>
         <C.Container>
            <p>Passo 4/4</p>
            <h1>Certo Jaguara 🧙‍♂️</h1>
            <p>Verifique se os dados estão preenchidos corretamente</p>

            <hr/>

            <C.Data>
               <label>
                  Nome completo: 
                  <h1>{ state.name }</h1>
               </label>

               <label>
                  Nivel: 
                  {state.level === 0 ? 
                     <SelectOption
                     title = 'Sou Iniciante'
                     description = 'Comecei a programar há menos de 2 anos'
                     icon = '🥳'
                     selected = {state.level === 0}
                     onClick={() => setLevel(0)}
                     
                     /> :

                     <SelectOption
                        title = 'Sou Programador'
                        description = 'Já programo há 2 anos ou mais'
                        icon = '😎'
                        selected = {state.level === 1}
                        onClick={() => setLevel(1)}
                     />
                  }
               </label>
            </C.Data>

            <C.Data>
               <label>
                  Verifique seu email:
                  <h1>{ state.email }</h1>
               </label>

               <label>
                  Link para o seu GitHub:
                  <h1>{ state.github }</h1>
               </label>
            </C.Data>

            <C.Btn>
               <Link to='/step3' className='backButton'>Voltar</Link>
               <button onClick={handleNextStep}>Confirmar Cadastro</button>
            </C.Btn>

         </C.Container>
      </Theme>
   )
}