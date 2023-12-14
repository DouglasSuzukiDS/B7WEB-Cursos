/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ArrowBack } from '@material-ui/icons'
import './NewChat.css'
import { useState } from 'react'

export const NewChat = ({ chatList, user, show, setShow }) => {
   const [list, setList] = useState([
      { id: 123, avatar: '/src/assets/Texugo.png', name: 'Shanks' },
      { id: 123, avatar: '/src/assets/Texugo.png', name: 'Shanks' },
      { id: 123, avatar: '/src/assets/Texugo.png', name: 'Shanks' },
      { id: 123, avatar: '/src/assets/Texugo.png', name: 'Shanks' },
   ])

   const handleClose = () => {
      setShow(false)
   }

   return(
      <div 
         className="newChat" 
         style={{ left: show ? '0px' : '-415px' }}>
         <div className="newChat--head">
            <div 
               className="newChat--backButton"
               onClick={ handleClose }>
               <ArrowBack style={{ color: '#FFF' }} />
            </div>

            <div className="newChat--headTitle">
               Nova conversa
            </div>
            
         </div>

         <div className="newChat--list">
            { list.map((item, key) => (
               <div className="newChat--item" key={ key }>
                  <img 
                     className='newChat--itemAvatar'
                     src={ item.avatar } alt={ item.name } />

                  <div className="newChat--itemName">
                     { item.name }
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}