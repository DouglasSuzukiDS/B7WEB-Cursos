import { AttachFile, Close, InsertEmoticon, Mic, MoreVert, Search, Send } from '@material-ui/icons'
import './ChatWindow.css'
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'

export const ChatWindow = () => {
   const [emojiOpen, setEmojiOpen] = useState(false)
   
   const handleEmojiClick = () => {

   }

   const handleOpenEmoji = () => {
      setEmojiOpen(true)
   }

   const handleCloseEmoji = () => {
      setEmojiOpen(false)
   }


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

         <div className="chatWindow--emojiArea"
            style={{ height: emojiOpen ? '200px' : '0px' }}>
            <EmojiPicker 
               searchDisabled
               skinTonesDisabled
               width={ '100%' }
               onEmojiClick={ handleEmojiClick }
            />
         </div>

         <div className="chatWindow--footer">

            <div className="chatWindow--pre" >
               <div 
                  className="chatWindow--btn"
                  onClick={ handleCloseEmoji } 
                  style={{ width: emojiOpen ? '40px' : '0px' }}>
                  <Close style={{ color: '#919191' }} />
               </div>

               <div 
                  className="chatWindow--btn"
                  onClick={ handleOpenEmoji } >
                  <InsertEmoticon style={{ color: emojiOpen ? '#007688' :'#919191' }} />
               </div>
            </div>

            <div className="chatWindow--inputArea">
               <input 
                  type="text" 
                  className="chatWindow-input" 
                  placeholder='Digite uma mensagem' />
               {/* <div className="chatWindow--btn">
                  <Mic style={{ color: '#919191' }} />
               </div> */}
            </div>

            <div className="chatWindow--pos">
               <div className="chatWindow--btn">
                  <Send style={{ color: '#919191' }} />
               </div>
            </div>

         </div>
      </div>
   )
}