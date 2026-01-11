import { Redirect, Stack } from "expo-router";

export default function Layout() {
   const isLogged = false

   if (!isLogged) {
      return <Redirect href="/publica" />
   }

   return (
      <Stack>
         <Stack.Screen name="meus-pedidos" />
      </Stack>
   )
}