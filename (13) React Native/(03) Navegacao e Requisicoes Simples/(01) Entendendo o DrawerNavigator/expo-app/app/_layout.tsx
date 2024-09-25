import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'

export default function RootLayout() {
   return (
      <GestureHandlerRootView>
         <Drawer>
            <Drawer.Screen
               name="index"
               options={{
                  drawerLabel: 'Início', // É o texto da Tab
                  headerTitle: 'Home',
                  headerTitleAlign: 'center',
               }}
            />

            <Drawer.Screen
               name="about"
               options={{
                  title: 'Sobre eo autor',
                  headerTitleAlign: 'center',
               }}
            />
         </Drawer>
      </GestureHandlerRootView>
   )
}