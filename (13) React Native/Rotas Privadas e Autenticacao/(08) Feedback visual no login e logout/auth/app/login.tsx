import { Button, Text, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "expo-router";

export default function Screen() {
   const { loading, signIn } = useAuth()
   const router = useRouter()

   const handleLoginButton = async () => {
      await signIn()
      router.replace('/')
   }
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Tela Login</Text>

         {loading && <Text>Logando...</Text>}
         
         {!loading &&
            <Button title='Logar'
               onPress={handleLoginButton} />
         }
      </View>
   )
}