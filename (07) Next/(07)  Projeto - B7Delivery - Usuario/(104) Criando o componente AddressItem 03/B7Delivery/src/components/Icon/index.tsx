import Card from './Card.svg'
import Checked from './Checked.svg'
import Cupom from './Cupom.svg'
import Dots from './Dots.svg'
import Location from './Location.svg'
import MailSend from './MailSend.svg'
import Money from './Money.svg'
import RightArrow from './RightArrow.svg'

type Props = {
   icon: string
   color: string
   width: number
   height: number
}

export const Icon = ({ icon, color, width, height }: Props) => {
   return(
      <div style={{ width, height }}>

         { icon === 'card' && <Card color={ color } /> }

         { icon === 'checked' && <Checked color={ color } /> }

         { icon === 'cupom' && <Cupom color={ color } /> }

         { icon === 'dots' && <Dots color={ color } /> }

         { icon === 'location' && <Location color={ color } /> }

         { icon === 'mailSend' && <MailSend color={ color } /> }

         { icon === 'money' && <Money color={ color } /> }

         { icon === 'rightArrow' && <RightArrow color={ color } /> }
      </div>
   )
}