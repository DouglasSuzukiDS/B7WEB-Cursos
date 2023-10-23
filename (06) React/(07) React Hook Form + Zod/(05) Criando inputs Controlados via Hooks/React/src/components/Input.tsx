import { SignUpForm } from "@/types/SignUpForm"
import { UseControllerProps, useController } from "react-hook-form"

export const Input = (props: UseControllerProps<SignUpForm>) => {
   const { field, fieldState } = useController(props)

   return (
      <div>
         <input
            { ...field } 
            placeholder={ props.name }
            className={` border ${ fieldState.invalid ? 'boder-red' : 'border-white' } p-3 text-black mb-3`}
         />

         { fieldState.error?.type === 'required' && <p>Campo obrigatório</p> }
      </div>
   )
}

export default Input