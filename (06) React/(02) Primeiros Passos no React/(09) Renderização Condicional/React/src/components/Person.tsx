const getWeekday = () => {
   return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date())
}

type Props = {
   name: string
   avatar?: string
   roles: string[]
   address?: string
}

const img:string = 'https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.6435-9/95709338_2725964904282464_8575987231167086592_n.png?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFFzw5KLv4Uey2c85y92W3BUgBkPFAnB2dSAGQ8UCcHZyAI4EcaC7BbVxpyfK-s3GXuV9HeUDDoDwqMQ3izuLSB&_nc_ohc=162twyU8qsUAX-yBROd&_nc_ht=scontent.fcgh12-1.fna&oh=00_AfAA3pUq6LwfWPqIVhoM2u65fN5v6dbUAD1X710gYbxl9A&oe=64D820AA'

export const Person = ({ name, avatar=img , roles, address }: Props) => {
   /*const name: string = 'Tonhao'
   const image: string = 'https://static.wikia.nocookie.net/penguinsofmadagascar/images/5/51/MotoMoto2.jpg/revision/latest?cb=20120622005912'
   const today: Date = new Date()

   const data = {
      name: 'Tonhao',
      avatar: 'https://static.wikia.nocookie.net/penguinsofmadagascar/images/5/51/MotoMoto2.jpg/revision/latest?cb=20120622005912',
      roles: ['Agiota', 'Empresario']
   }*/

   // const { name, avatar, roles, address } = props
 
   return(
      <>
         <h1 style={{ color: 'aqua' }}>Name: { name } - { getWeekday() }</h1>
         <img 
            src={ avatar } 
            alt={ name }
            className="w-40" />
         
         <ul>
            <li>{ roles[0] }</li>
            <li>{ roles[1] }</li>
         </ul>
      </>
   )
}