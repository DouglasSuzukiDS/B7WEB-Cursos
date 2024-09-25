import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'
import { View } from "react-native";
import { CustomDrawer } from "../components/custom-drawer";

export default function RootLayout() {
   return (
      <GestureHandlerRootView>
         <Drawer 
            drawerContent={
               (props) => < CustomDrawer { ...props } />
            }>
            <Drawer.Screen
               name="index"
               options={{
                  drawerLabel: 'Início', // É o texto da Tab
                  headerTitle: 'Home',
                  headerTitleAlign: 'center',
                  drawerIcon: ({ color, size }) => 
                     <View style={{
                        width: size, 
                        height: size,
                        backgroundColor: color
                     }}></View>
               }}
            />

            <Drawer.Screen
               name="about"
               options={{
                  title: 'Sobre o autor',
                  headerTitleAlign: 'center',
                  drawerIcon: ({ color, size }) => 
                     <View style={{
                        width: size, 
                        height: size,
                        borderRadius: 10,
                        backgroundColor: color
                     }}></View>
               }}
               
            />
         </Drawer>
      </GestureHandlerRootView>
   )
}