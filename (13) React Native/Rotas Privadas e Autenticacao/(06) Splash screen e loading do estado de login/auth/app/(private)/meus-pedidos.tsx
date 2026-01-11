import { Button, Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "expo-router";

export default function Screen() {
   const { signOut } = useAuth()
   const router = useRouter()

   const handleLogoutButton = async () => {
      await signOut()
      router.replace('/')
   }

   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Meus pedidos</Text>

         <Button title='Logout'
            onPress={handleLogoutButton} />
      </View>
   )
}