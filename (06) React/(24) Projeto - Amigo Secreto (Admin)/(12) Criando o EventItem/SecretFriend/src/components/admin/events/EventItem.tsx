import { Event } from "@/types/Event"
import { ItemButton } from "../ItemButton"
import { FaLink, FaRegEdit, FaRegTrashAlt } from "react-icons/fa"

type Props = {
   item: Event
   refreshAction: () => void
   openModal: (event: Event) => void
}

export const EventItem = ({ item, refreshAction, openModal }: Props) => {

   console.log(item)

   const handleEditButton = () => openModal(item)

   const handleDeleteButton = () => {

   }

   return(
      <div className="border border-gray-700 rounded p-3 mb-3 flex flex-col items-center md:flex-row">
         <div className="flex-1 txt-xl md:text-base">
            { item.title }
         </div>

         <div className="flex items-center gap-1 mt-2 md:mt-0">
            { item.status &&
               <div className="border border-dashed border-white rounded">
                  <ItemButton
                     IconElement={ FaLink }
                     label="Link do evento"
                     href={ `/event/${ item.id }` }
                     target="_blank"
                  />
               </div>
            }
            <ItemButton
               IconElement={ FaRegEdit }
               label="Editar"
               onClick={ handleEditButton }
            />

            <ItemButton
               IconElement={ FaRegTrashAlt }
               label="Excluir"
               onClick={ handleDeleteButton }
            />
         </div>
      </div>
   )
}

export const EventItemPlaceholder = () => {
   return(
      <div className="w-full h-16 border borde-gray-700 rounded mb-3 bg-gradient-to-r from-gray-900 to-gray-950 animate-pulse"></div>
   )
}

export const EventItemNotFound = () => {
   return(
      <div className="text-center py-4 text-gray-500">
         Não há eventos cadastrados
      </div>
   )
}