import { EmojiRating } from "@/components/EmijiRating"
import { Conditional01 } from "@/exercises/(13)Conditional01"
import { Rating } from "@/exercises/(15)Rating01"

function Page () {
  
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <EmojiRating rate={3.5} />
      
      <h1>-------------- Minha solução ---------------</h1>
      <Rating note={5} />
    </div>

  )
}

export default Page