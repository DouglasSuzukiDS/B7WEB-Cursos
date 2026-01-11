import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";

export default function Layout() {
   return (
      <AuthProvider>
         <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="publica" />
            <Stack.Screen
               name="login"
               options={{ headerShown: false }} />
         </Stack>
      </AuthProvider>
   )
}