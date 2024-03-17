type Props = {
   params: {
      slug: string[]
   }
}

const Page = ({ params }: Props) => {
   return (
      <div>
         Filtros: { params.slug.join(', ') }
      </div>
   )
}

export default Page