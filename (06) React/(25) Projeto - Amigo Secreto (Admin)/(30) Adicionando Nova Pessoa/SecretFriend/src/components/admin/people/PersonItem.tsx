import { Person } from "@/types/Person"

type Props = {
   person: Person
}

export const PersonItem = ({ person }: Props) => {
   return(
      <div>

      </div>
   )
}

export const PersonItemPlaceholder = () => {
   return(
      <div className="w-full h-16 border borde-gray-700 rounded mb-3 bg-gradient-to-r from-gray-900 to-gray-950 animate-pulse"></div>
   )
}

export const PersonItemNotFound = () => {
   return(
      <div className="text-center py-4 text-gray-500">
         Não há pessoas neste grupo.
      </div>
   )
}