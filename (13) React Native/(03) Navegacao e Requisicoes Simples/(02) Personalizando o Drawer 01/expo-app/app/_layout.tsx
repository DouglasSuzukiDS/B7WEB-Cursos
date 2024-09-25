import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'
import { View } from "react-native";

export default function RootLayout() {
   return (
      <GestureHandlerRootView>
         <Drawer screenOptions={{
            drawerPosition: 'left', // Abertura do Drawer
            drawerType: 'front', // Abertura do Drawer, enpurrando ou não a tela 
            drawerActiveTintColor: '#F00',
            drawerActiveBackgroundColor: '#FF0',
            drawerInactiveTintColor: '#00F',
            drawerContentStyle: { // Area do Drawer
               backgroundColor: '#F00',
               width: 250,
            },
            drawerContentContainerStyle: { // Area que contem o menu
               backgroundColor: '#FF0',
            },
            drawerStyle: { // Container do Drawer
               backgroundColor: '#00F'
            }
         }}>
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
                  title: 'Sobre eo autor',
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