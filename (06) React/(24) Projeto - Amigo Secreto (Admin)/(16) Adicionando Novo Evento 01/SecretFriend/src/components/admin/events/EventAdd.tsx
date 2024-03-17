'use client'

import { useState } from "react"
import { InputField } from "../InputField"
import { Button } from "../Button"

type Props = {
   refreshAction: () => void
}

export const EventAdd = ({ refreshAction }: Props) => {
   const [titleField, setTitleField] = useState('')
   const [descriptionField, setDescriptionField] = useState('')
   const [groupedField, setGroupedField] = useState(false)

   const handleAddButton = () => {

   }

   return(
      <div>
         <div className="mb-5">
            <label>Título</label>

            <InputField 
               value={ titleField }
               onChange={ e => setTitleField(e.target.value) }
               placeholder="Digite o título do evento"
            />
         </div>

         <div className="mb-5">
            <label>Descrição</label>

            <InputField 
               value={ descriptionField }
               onChange={ e => setDescriptionField(e.target.value) }
               placeholder="Digite a descrição do evento"
            />
         </div>

         <div className="mb-5">
            <label>Agrupar sorteio?</label>

            <input
               type="checkbox"
               checked={ groupedField }
               onChange={ e => setGroupedField(!groupedField) }
               className="block w-5 h-5 mt-3"
            />
         </div>

         <div>
            <Button 
            value="Adicionar"
               onClick={ handleAddButton }
            />
         </div>
      </div>
   )
}