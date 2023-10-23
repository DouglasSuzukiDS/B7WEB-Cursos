/* eslint-disable react/prop-types */
import './MessageItem.css'

export const MessageItem = ({ data, user }) => {
   // alert(`
   //    Data: ${JSON.stringify(data)}
   //    User: ${JSON.stringify(user)}
   // `)
   return(
      <div 
         className='messageLine'
         style={{
            justifyContent: user.id === data.author ? 'flex-end': 'flex-start',
         }}>
         <div 
            className="messageItem"
            style={{
               backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF'
            }}>

            <div className="messageText">
               { data.body }
            </div>

            <div className="messageDate">19:00</div>
         </div>
      </div>
   )
}