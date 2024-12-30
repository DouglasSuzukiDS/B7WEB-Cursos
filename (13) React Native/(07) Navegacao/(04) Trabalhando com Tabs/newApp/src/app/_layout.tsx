import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'

export default function RootLayout() {
   return (
      <Tabs screenOptions={{
         headerShown: true,
         headerTitleAlign: 'center',
         tabBarHideOnKeyboard: true, // Quanto o teclado estiver aberto, a tabBar não aparece
         tabBarActiveTintColor: '#F00',

         tabBarStyle: {
            backgroundColor: '#202225',
            borderWidth: 0
         }
      }}>
         <Tabs.Screen name='index'
            options={{
               title: 'Home',
               headerStyle: {
                  backgroundColor: '#121212'
               },
               headerTintColor: '#FFF',
               tabBarIcon: ({ color, size }) => <Feather name='home' size={size} color={color} />
            }} />
         <Tabs.Screen name='sobre'
            options={{
               title: 'Sobre',
               tabBarIcon: ({ color, size }) => <Feather name='file-text' size={size} color={color} />
            }} />

         <Tabs.Screen name='contato'
            options={{
               title: 'Contato',
               tabBarIcon: ({ color, size }) => <Feather name='phone-call' size={size} color={color} />
            }} />
      </Tabs>
   )
}