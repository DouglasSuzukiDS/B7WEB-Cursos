import * as api from '@/api/admin'
import { Group } from '@/types/Group'
import { useEffect, useState } from 'react'
import { GroupItemNotFound, GroupItemPlaceholder } from '../groups/GroupItem'

type Props = {
   eventId: number
}

export const EventTabPeople = ({ eventId }: Props) => {
   // Groups
   const [groups, setGroups] = useState<Group[]>([])
   const [selectedGroupId, setSelectedGroupId] = useState(0)
   const [groupLoading, setGroupLoading] = useState(false)

   const loadGroups = async() =>{
      setSelectedGroupId(0)

      setGroupLoading(true)

      const groupList = await api.getGroups(eventId)

      setGroupLoading(false)

      setGroups(groupList)
   }

   useEffect(() => {
      loadGroups()
   }, [])

   return(
      <div>
         <div className="my-3">
            { !groupLoading && groups.length > 0 &&
               <select
                  className='w-full bg-transparent text-white text-xl p-3 outline-none'
                  onChange={ e => setSelectedGroupId(parseInt(e.target.value)) }
               >
                  <option value={ 0 } className='bg-gray-800'>Selecione um Grupo</option>

                  { groups.map(item => (
                     <option 
                        key={ item.id }
                        className='bg-gray-800'
                        value={ item.id }>
                        { item.name }
                     </option>
                  )) }
               </select>
            }

            { groupLoading && <GroupItemPlaceholder /> }

            { !groupLoading && groups.length === 0 &&
               <GroupItemNotFound /> 
            }
         </div>
      </div>
   )
}