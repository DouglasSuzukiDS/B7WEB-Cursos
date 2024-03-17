import { Member } from "@/types/member"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AvatarFallback } from "@/components/ui/avatar"

type Props = {
   data: Member
}

export const TeamItem = ({ data }: Props) => {
   return (
      <div className="flex gap-4 items-center">
         <div>
            <Avatar>
               <AvatarImage src={ data.avatar } />
               <AvatarFallback></AvatarFallback>
            </Avatar>
         </div>

         <div className="flex-1">
            <div>{ data.name }</div>

            <div className="xt-sm text-primary/50">
               { data.email }
            </div>
         </div>

         <div>
            ***
         </div>
      </div>
   )
}