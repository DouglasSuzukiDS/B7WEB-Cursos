import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'
import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/auth";

export default function RootLayout() {
   return (
      <AuthProvider>
         <Stack>
            <Stack.Screen name="index"
               options={{
                  title: 'Home',
                  headerTitleAlign: 'center',
               }}
            />
         </Stack>
      </AuthProvider>
   )
}