import { Event } from "@/types/Event"
import { ErrorItem } from "@/utils/getErrorFromZod"
import { useState } from "react"
import { InputField } from "../InputField"
import { Button } from "../Button"

type Props = {
   event: Event
   refreshAction: () => void
}

export const EventTabInfo = ({ event, refreshAction }: Props) => {
   const [titleField, setTitleField] = useState(event.title)
   const [descriptionField, setDescriptionField] = useState(event.description)
   const [groupedField, setGroupedField] = useState(event.grouped)
   const [statusField, setStatusField] = useState(event.status)
   const [errors, setErrors] = useState<ErrorItem[]>([])
   const [loading, setLoading] = useState(false)

   const handleSaveButton = () => {
      
   }

   return(
      <div className="my-3">
         <div className="mb-5">
            <label>Título</label>

            <InputField
               value={ titleField }
               onChange={ e => setTitleField(e.target.value) }
               placeholder="Digite o título do evento"
               errorMessage={ errors.find(item => item.field === 'titleField') ?.message }
            />
         </div>

         <div className="mb-5">
            <label>Descrição</label>

            <InputField
               value={ descriptionField }
               onChange={ e => setDescriptionField(e.target.value) }
               placeholder="Digite a descrição do evento"
               errorMessage={ errors.find(item => item.field === 'descriptionField') ?.message }
            />
         </div>

         <div className="flex mb-5">
            <div className="flex-1">
               <label>Agrupar sorteio?</label>

               <input
                  type="checkbox"
                  checked={ groupedField }
                  onChange={ e => setGroupedField(!groupedField) }
                  className="block w-5 h-5 mt-3"
               />
            </div>

            <div className="flex-1">
               <label>Evento liberado?</label>

               <input
                  type="checkbox"
                  checked={ statusField }
                  onChange={ e => setStatusField(!statusField) }
                  className="block w-5 h-5 mt-3"
               />
            </div>
         </div>

         <div>
            <Button
               value="salvar"
               onClick={ handleSaveButton }
            />
         </div>

      </div>
   )
}