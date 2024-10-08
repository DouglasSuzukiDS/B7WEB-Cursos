import { Stack } from "expo-router";

export default function RootLayout() {
   return (
      <Stack screenOptions={{
         headerTitleAlign: 'center'
      }}>
         <Stack.Screen name="index" 
            options={{ headerTitle: 'Home' }} />
         <Stack.Screen name="about"
            options={{ headerTitle: 'Sobre' }}/>
      </Stack>
   )
}