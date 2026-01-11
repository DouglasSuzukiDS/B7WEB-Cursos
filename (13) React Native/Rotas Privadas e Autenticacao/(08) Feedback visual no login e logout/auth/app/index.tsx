import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { SplashScreen } from "../components/splash-screen";

export default function Home() {
   const { isAuthenticated, loading } = useAuth()
   const router = useRouter()

   if (loading) {
      return <SplashScreen />
   }

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