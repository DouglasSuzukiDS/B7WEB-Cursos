type Props = {
   params: {
      postId: string
      action: string
   }
}

const Page = ({ params }: Props) => {
   return (
      <div>
         Blog ID: { params.postId }
         ({ params.action })
      </div>
   )
}

export default Page