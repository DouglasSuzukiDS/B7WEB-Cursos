/* eslint-disable react/prop-types */
import { AttachFile, Close, InsertEmoticon, Mic, MoreVert, Search, Send } from '@material-ui/icons'
import './ChatWindow.css'
import EmojiPicker from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react'
import { MessageItem } from '../MessageItem/MessageItem'
import Api from '../../Api'

export const ChatWindow = ({ user, data }) => {
   const body = useRef()

   let recognition = null
   let SpeedchRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

   if(SpeedchRecognition !== undefined) {
      recognition = new SpeedchRecognition() // Permite escutar
   }

   const [emojiOpen, setEmojiOpen] = useState(false)
   const [text, setText] = useState('')
   const [listening, setListening] = useState(false)
   const [list, setList] = useState([ /*{ author: 123, body: 'bla123' }*/ ])
   const [users, setUsers] = useState([])

   useEffect(() => {
      setList([])

      let unsub = Api.onChatContent(data.chatId, setList, setUsers)

      return unsub
   }, [data.chatId])

   useEffect(() => {
      if(body.current.scrollHeight > body.current.offsetHeight) {
         body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
         console.log(body)
         console.log(body.current.scrollHeight - body.current.offsetHeight)
      }
   }, [list])
   
   const handleEmojiClick = (e) => {
      // console.log(e) // Mostra as informações do emoji
      setText(text + e.emoji)
   }

   const handleOpenEmoji = () => {
      setEmojiOpen(true)
   }

   const handleCloseEmoji = () => {
      setEmojiOpen(false)
   }

   const handleMicClick = () => {
      console.log(SpeedchRecognition)
      if(recognition !== null) {
         recognition.onstart = () => {
            setListening(true)
         }

         recognition.onend = () => {
            setListening(false)
         }

         recognition.onresult = (e) => {
            setText(e.results[0][0].transcript)
         }

         recognition.start()
      }
   }
   
   const handleInputKeyUp = (e) => {
      if(e.keyCode === 13) {
         handleSendClick()
      }
   }

   const handleSendClick = () => {
      if(text !== '') {
         Api.sendMessage(data, user.id, 'text', text, users)
         
         setText('')
         setEmojiOpen(false)
      }
   }

   return(
      <div className='chatWindow'>
         <div className="chatWindow--header">

            <div className="chatWindow--headerInfo">
               <img className='chatWindow--avatar' src={ data.image } alt="" />

               <div className="chatWindow--name">
                  { data.title }
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

         <div ref={ body } className="chatWindow--body">
            { list.map((item, key) => (
               <MessageItem 
                  key={ key }
                  data={ item }
                  user={ user }
               />
            ))}
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
                  <Close style={{ color: listening ? '#126ECE' : '#919191' }} />
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
                  placeholder='Digite uma mensagem' 
                  value={ text }
                  onChange={ e => setText(e.target.value) } 
                  onKeyUp={ handleInputKeyUp } />
            </div>

            <div className="chatWindow--pos">
               { text === '' &&
                  <div 
                     className="chatWindow--btn"
                     onClick={ handleMicClick }>
                     <Mic style={{ color: '#919191' }} />
                  </div>
               }

               { text !== '' &&
                  <div 
                     className="chatWindow--btn"
                     onClick={ handleSendClick }>
                     <Send style={{ color: '#919191' }} />
                  </div>
               }

            </div>

         </div>
      </div>
   )
}