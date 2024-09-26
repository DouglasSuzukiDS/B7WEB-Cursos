import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'

export default function RootLayout() {
   return (
      <GestureHandlerRootView>
         <Drawer>
            <Drawer.Screen
               name="index"
               options={{ 
                  title: 'Dolar Americano',
                  headerTitleAlign: 'center',
               }}
            />

         <Drawer.Screen
               name="eur"
               options={{ 
                  title: 'Euro',
                  headerTitleAlign: 'center',
               }}
            />
         </Drawer>
      </GestureHandlerRootView>
   )
}