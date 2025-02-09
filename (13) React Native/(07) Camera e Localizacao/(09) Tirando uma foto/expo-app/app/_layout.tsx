import { Stack } from "expo-router";

export default function RootLayout() {
   return (
      <Stack screenOptions={{ statusBarStyle: 'auto' }}>
         <Stack.Screen
            name="index"
            options={{
               title: 'Home',
               headerTitleAlign: 'center',
            }}
         />
      </Stack>
   )
}