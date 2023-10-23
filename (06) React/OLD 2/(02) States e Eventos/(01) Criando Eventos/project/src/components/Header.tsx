type Props = {
   title?: string // Opcional
}

/*export const Header = (props: Props) => { // Forma 01
   return(
     <header>
         <h1>{ props.title }</h1>
         <hr />
     </header>
   )
}*/

export const Header = ({ title }: Props) => { // Forma 02
   return(
     <header>
         <h1>{ title }</h1>
         <hr />
     </header>
   )
}