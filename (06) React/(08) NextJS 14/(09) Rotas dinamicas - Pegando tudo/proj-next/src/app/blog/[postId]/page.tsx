type Props = {
   params: {
      postId: string
   }
}

const Page = ({ params }: Props) => {
   return (
      <div>
         Blog ID: { params.postId }
      </div>
   )
}

export default Page