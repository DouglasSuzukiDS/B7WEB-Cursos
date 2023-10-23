import { useRouter } from "next/navigation" 

const Idade = ({ params }:{ params:{ slug:string } }) => {
   const { slug } = params

   return(
      <div>{ slug } tem 30 anos.</div>
   )
}

export default Idade