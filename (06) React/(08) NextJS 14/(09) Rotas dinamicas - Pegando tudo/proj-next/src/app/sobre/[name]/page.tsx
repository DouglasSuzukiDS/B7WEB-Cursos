type Props = {
   params: {
      name: string
   }
}

const Page = ({ params }: Props) => {
   return (
      <div>
         Pagina Sobre { params.name }
      </div>
   )
}

export default Page