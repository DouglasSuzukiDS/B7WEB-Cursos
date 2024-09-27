import { useContext } from "react"
import { Text, View } from "react-native"
import { auth } from "../contexts/auth"

export const Area1 = () => {
   const authContext = useContext(auth)

   return(
      <View>
         <Text>Area 01 - { authContext }</Text>
      </View>
   )
}