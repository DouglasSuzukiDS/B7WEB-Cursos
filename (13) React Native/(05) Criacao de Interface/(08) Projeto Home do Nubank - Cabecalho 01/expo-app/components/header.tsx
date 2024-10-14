import { SafeAreaView, Text, View } from "react-native"
import { ProfileIcon } from "./profile-icon"

export const Header = () => {
   return(
      <SafeAreaView className="bg-nubank text-white">
         <View className="">
            <ProfileIcon />
         </View>

         <View className="">
            <Text className="text-white">Olá, Nick</Text>
         </View>
      </SafeAreaView>
   )
}