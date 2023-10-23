import { AttachFile, MoreVert, Search } from '@material-ui/icons'
import './ChatWindow.css'

export const ChatWindow = () => {
   return(
      <div className='chatWindow'>
         <div className="chatWindow--header">

            <div className="chatWindow--headerInfo">
               <img className='chatWindow--avatar' src="/src/assets/Texugo.png" alt="" />

               <div className="chatWindow--name">
                  Shanks
               </div>
            </div>


            <div className="chatWindow--headerButtons">
               <div className="chatWindow--btn">
                  <Search style={{ color: '#919191' }} />
               </div>

               <div className="chatWindow--btn">
                  <AttachFile style={{ color: '#919191' }} />
               </div>

               <div className="chatWindow--btn">
                  <MoreVert style={{ color: '#919191' }} />
               </div>
            </div>

         </div>

         <div className="chatWindow--body">

         </div>

         <div className="chatWindow--footer">

         </div>
      </div>
   )
}