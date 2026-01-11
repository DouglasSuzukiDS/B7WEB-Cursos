import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

export default function Layout() {
   const { isAuthenticated } = useAuth()

   if (!isAuthenticated) {
      return <Redirect href="/login" />
   }

   return (
      <Stack>
         <Stack.Screen name="meus-pedidos" />
      </Stack>
   )
}