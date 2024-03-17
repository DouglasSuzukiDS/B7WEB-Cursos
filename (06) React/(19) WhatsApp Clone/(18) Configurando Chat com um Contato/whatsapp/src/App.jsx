import { Chat, DonutLarge, MoreVert, Search } from '@material-ui/icons'
import './App.css'
import { useEffect, useState } from 'react'
import { ChatListItem } from './components/ChatListItem/ChatListItem'
import { ChatIntro } from './components/ChatIntro/ChatIntro'
import { ChatWindow } from './components/ChatWIndow/ChatWindow'
import { NewChat } from './components/NewChat/NewChat'
import { Login } from './components/Login/Login'
import Api from './Api'

export const App = () => {
  const [chatList, setChatList] = useState([])
  const [activeChat, setActiveChat] = useState({})
  // const [user, setUser] = useState(null)
  const [user, setUser] = useState({
    id: '5pOU8z15r7r2oe6zeK0x',
    name: 'Fulano',
    avatar: 'http://localhost:5173/src/assets/Texugo.png'
  })

  const [showNewChat, setShowNewChat] = useState(false)

  useEffect(() => {
    if(user !== null) {
      let unsub = Api.onChatList(user.id, setChatList)

      return unsub
    }
  }, [user])

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  const handleLoginData = async(u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    // alert(JSON.stringify(newUser))

    await Api.addUser(newUser)

    setUser(newUser)
  }

  if(user === null) {
    return( <Login onReceive={ handleLoginData } /> )
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat 
          chatList={ chatList }
          user={ user }
          show={ showNewChat } 
          setShow={ setShowNewChat } />

        <header>
          <img
            className='header--avatar' 
            src={ user.avatar } alt="Avatar" />

          <div className="header--buttons">
            <div className="header--btn">
              <DonutLarge style={{ color: '#919191' }} />
            </div>

            <div 
              className="header--btn"
              onClick={ handleNewChat }>
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
