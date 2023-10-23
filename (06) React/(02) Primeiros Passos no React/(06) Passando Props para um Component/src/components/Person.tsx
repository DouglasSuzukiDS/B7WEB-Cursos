const getWeekday = () => {
   return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date())
}

type Props = {
   name: string
   avatar: string
   roles: string[]
   address?: string
}

export const Person = ({ name, avatar, roles, address }: Props) => {
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