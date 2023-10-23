import { useUser } from "@/contexts/UserContext"
import { NameInput } from "./NameInput"

export const Chat = () => {
   const userCtx = useUser()

   if(!userCtx) return null

   if(!userCtx.user) return <NameInput />

   return(
      <div className="border border-white/30 rounded-md">
         ***
      </div>
   )
}