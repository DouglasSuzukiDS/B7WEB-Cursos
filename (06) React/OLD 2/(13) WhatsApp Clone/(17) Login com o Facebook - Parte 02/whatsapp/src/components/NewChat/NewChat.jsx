/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ArrowBack } from '@material-ui/icons'
import './NewChat.css'
import { useEffect, useState } from 'react'
import Api from '../../Api'

export const NewChat = ({ chatList, user, show, setShow }) => {
   const [list, setList] = useState([])

   useEffect(() => {
      const getList = async() => {
         if(user !== null) {
            let results = await Api.getContactList(user.id)
            setList(results)
         }
      }

      getList()
   }, [user])

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