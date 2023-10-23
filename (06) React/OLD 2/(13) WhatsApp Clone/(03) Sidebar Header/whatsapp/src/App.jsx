import { Chat, DonutLarge, MoreVert } from '@material-ui/icons'
import './App.css'

export const App = () => {

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
          Search
        </div>

        <div className="chatList">
          ChatList
        </div>
      </div>

      <div className="contentArea">
        ***
      </div>
    </div>
  )
}
