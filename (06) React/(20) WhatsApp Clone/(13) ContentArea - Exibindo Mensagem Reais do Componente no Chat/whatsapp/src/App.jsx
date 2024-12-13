import { Chat, DonutLarge, MoreVert, Search } from '@material-ui/icons'
import './App.css'
import { useState } from 'react'
import { ChatListItem } from './components/ChatListItem/ChatListItem'
import { ChatIntro } from './components/ChatIntro/ChatIntro'
import { ChatWindow } from './components/ChatWIndow/ChatWindow'

export const App = () => {
  const [chatList, setChatList] = useState([
    { chatId: 1, title: 'Fulano 01', image : '/src/assets/Texugo.png' },
    { chatId: 2, title: 'Fulano 02', image: '/src/assets/Texugo.png' },
    { chatId: 3, title: 'Fulano 03', image: '/src/assets/Texugo.png' },
    { chatId: 4, title: 'Fulano04', image: '/src/assets/Texugo.png' }
  ])
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState({
    id: 1234,
    avatar: '/src/assets/Texugo.png',
    name: 'Shanks'
  })

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className='header--avatar' 
            src={ user.avatar } alt="Avatar" />

          <div className="header--buttons">
            <div className="header--btn">
              <DonutLarge style={{ color: '#919191' }} />
            </div>

            <div className="header--btn">
              <Chat style={{ color: '#919191' }} />
            </div>

            <div className="header--btn">
              <MoreVert style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <Search 
              fontSize='small' style={{ color: '#919191' }} />
            <input type="search" placeholder='Pesquisar ou começar uma nova conversa' />
          </div>
        </div>

        <div className="chatList">
          { chatList.map((item, key) => (
            <ChatListItem 
              key={ key } 
              data={ item }
              active={ activeChat.chatId === chatList[key].chatId }
              onClick={ () => setActiveChat(chatList[key]) } />
          ))}
        </div>
      </div>

      <div className="contentArea">
        { activeChat.chatId !== undefined &&
          <ChatWindow 
            user={ user } />
        }

        { activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  )
}
