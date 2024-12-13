'use client'
import * as api from '@/api/admin'
import { ItemButton } from '@/components/admin/ItemButton'
import { Modal } from '@/components/admin/Modal'
import { EventItem, EventItemNotFound, EventItemPlaceholder } from '@/components/admin/events/EventItem'
import { Event } from '@/types/Event'
import { ModalScreens } from '@/types/ModalScreens'
import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'

export const AdminPage = () => {
   const [events, setEvents] = useState<Event[]>([])
   const [loading, setLoading] = useState(true)
   const [modalScreen, setModalScreen] = useState<ModalScreens>(null)

   const loadEvents = async() => {
      setLoading(true)

      const eventList = await api.getEvents()

      setLoading(false)

      setEvents(eventList)
   }

   useEffect(() => {
      loadEvents()
   }, [])

   return(
      <div>
         <div className='p-3 flex items-center'>
            <h1 className="text-2xl flex-1">Eventos</h1>
            
            <ItemButton 
               IconElement={ FaPlus }
               onClick={ () => setModalScreen('add') }
            />
         </div>

         <div className='my-3'>
            { !loading && events.length > 0 && events.map(item => (
               <EventItem 
                  key={ item.id }
                  item={ item }
                  refreshAction={ loadEvents }
                  openModal={ () => {} }
               />
            )) }

            { !loading && events.length === 0 && <EventItemNotFound /> }

            { loading &&
               <>
                  <EventItemPlaceholder />
                  <EventItemPlaceholder />
               </> 
            }
         </div>

         { modalScreen &&
            <Modal onClose={ () => setModalScreen(null) }>
               Tipo: { modalScreen }
            </Modal>
         }
      </div>
   )
}

export default AdminPage