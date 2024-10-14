import { Button, SafeAreaView, Text, View } from "react-native"
import { ProfileIcon } from "./profile-icon"
import { ButtonIcon } from "./button-icon"

export const Header = () => {
   return(
      <SafeAreaView className="bg-nubank text-white py-5">
         <View className="flex-row justify-between px-4">
            <ProfileIcon />

            <View className="flex-row">
               <ButtonIcon
                  icon="eye-slash"
                  onPress={ () => {} }
               />

               <ButtonIcon
                  icon="circle-question"
                  onPress={ () => {} }
               />

               <ButtonIcon
                  icon="message"
                  onPress={ () => {} }
               />
            </View>
         </View>

         <View className="px-4 pt-5 pb-2">
            <Text
               className="text-white font-bold text-2xl">
               Olá, Nick
            </Text>
         </View>
      </SafeAreaView>
   )
}