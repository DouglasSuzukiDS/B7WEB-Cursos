import { LinkArea, LinkIcon } from './styled'

export const MenuItem = ({ icon, link }) => {
   return(
      <LinkArea href={ link }>
         <LinkIcon src={ icon } />
      </LinkArea>
   )
}