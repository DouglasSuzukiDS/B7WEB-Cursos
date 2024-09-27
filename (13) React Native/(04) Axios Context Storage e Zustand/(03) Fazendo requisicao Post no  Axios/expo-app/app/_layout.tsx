import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'
import { Stack } from "expo-router";

export default function RootLayout() {
   return (
      <Stack>
         <Stack.Screen name="index"
            options={{
               title: 'Home',
               headerTitleAlign: 'center',
            }}
         />
      </Stack>
   )
}