import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'
import { View } from "react-native";
import { CustomDrawer } from "../components/custom-drawer";
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

{/* <GestureHandlerRootView>
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
</GestureHandlerRootView> */}