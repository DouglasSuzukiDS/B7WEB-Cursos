import { SignUpForm } from "@/types/SignUpForm"
import { UseControllerProps, useController } from "react-hook-form"

export const Input = (props: UseControllerProps<SignUpForm>) => {
   const { field, fieldState } = useController(props)

   return (
      <div className="mb-2">
         <input
            { ...field } 
            placeholder={ props.name }
            className={` border ${ fieldState.invalid ? 'boder-red' : 'border-white' } p-3 text-black mb-1`}
         />

         { fieldState.error?.type === 'required' && <p>Campo obrigatório</p> }
         { fieldState.error?.type === 'min' && <p>Valor minimo exigido</p> }
         { fieldState.error?.type === 'mmax' && <p>Valor maximo exigido</p> }
      </div>
   )
}

export default Input