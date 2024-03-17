import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { members } from "@/data/members"
import { TeamItem } from "./team-item"

export const TeamArea = () => {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Team Members</CardTitle>

            <CardDescription>
               Invite your team members to collaborate.
            </CardDescription>
         </CardHeader>

         <CardContent>
            { members.map(item => (
               <TeamItem key={ item.id } data={ item } />
            ))}
         </CardContent>
      </Card>

   )
}