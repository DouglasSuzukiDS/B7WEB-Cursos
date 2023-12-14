type Props = {
   params: {
      id: string
   }
}

const Page = ({ params }: Props) => {
   return(
      <div>
         ID: do envento: { params.id }
      </div>
   )
}

export default Page