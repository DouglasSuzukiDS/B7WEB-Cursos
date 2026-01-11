import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
   const { isAuthenticated } = useAuth()
   const router = useRouter()

   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Hello World</Text>

         <Text>Logado: {isAuthenticated ? "Sim" : "Não"}</Text>

         <Button
            title="Ir para Publica"
            onPress={() => router.push(`publica`)} />

         <Button
            title="Ir para Meus Pedidos"
            onPress={() => router.push(`(private)/meus-pedidos`)} />
      </View>
   )
}