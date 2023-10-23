import { Chat, DonutLarge, MoreVert, Search } from '@material-ui/icons'
import './App.css'
import { useState } from 'react'
import { ChatListItem } from './components/ChatListItem/ChatListItem'

export const App = () => {
  const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className='header--avatar' 
            src="/src/assets/Texugo.png" alt="Avatar" />

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
            <ChatListItem key={ key } />
          ))}
        </div>
      </div>

      <div className="contentArea">
        ***
      </div>
    </div>
  )
}
