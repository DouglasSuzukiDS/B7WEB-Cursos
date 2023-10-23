import { LinkArea, LinkIcon } from './styled'
import { useHistory, useLocation } from 'react-router-dom'

export const MenuItem = ({ icon, link }) => {
   const history = useHistory()
   const location = useLocation()

   let isActive = location.pathname === link

   const handleLinkClick = (e) => {
      e.preventDefault()
      history.push( link )
   }

   return(
      <LinkArea active={ isActive } href={ link } onClick={ handleLinkClick }>
         <LinkIcon src={ icon } />
      </LinkArea>
   )
}