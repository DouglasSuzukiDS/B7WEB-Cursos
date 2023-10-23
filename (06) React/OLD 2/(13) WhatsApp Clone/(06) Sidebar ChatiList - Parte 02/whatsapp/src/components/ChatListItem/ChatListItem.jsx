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
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos illo. Soluta ipsam, sunt impedit exercitationem repudiandae aut, tempora omnis perspiciatis debitis a libero nihil blanditiis ut provident pariatur voluptatum?
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}