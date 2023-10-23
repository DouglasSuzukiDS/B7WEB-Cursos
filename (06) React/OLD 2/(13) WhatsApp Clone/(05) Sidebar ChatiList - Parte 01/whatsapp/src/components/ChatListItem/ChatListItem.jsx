import './ChatListItem.css'

export const ChatListItem = () => {
   return (
      <div className="chatListItem">
         <img src="/src/assets/Texugo.png" alt="" className="chatListItem--avatar" />

         <div className="chatListItem--lines">
            <div className="chatListItem--line">
               <div className="chatListItem--line">
                  <div className="chatListItem--name">
                     Shanks
                  </div>

                  <div className="chatListItem--date">
                     19:00
                  </div>
               </div>

            </div>

            <div className="chatListItem--line">
               <div className="chatListItem--lastMsg">
                  <p>Eae</p>
               </div>
            </div>
         </div>
      </div>
   )
}