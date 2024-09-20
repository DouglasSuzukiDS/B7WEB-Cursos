import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TabLayout() {
   return (
      <Tabs screenOptions={{ 
         headerShown: false,
         headerTitleAlign: 'center',
         tabBarActiveTintColor: '#F00'
      }}>
         <Tabs.Screen
            
            name="(home)"
            options={{
               title: 'Home',
               tabBarIcon: ({ color }) => <FontAwesome
                  size={28}
                  name='home'
                  color={color}
               />,
            }}
         />

         <Tabs.Screen
            name="about"
            options={{
               title: 'Sobre',
               tabBarIcon: ({ color }) => <FontAwesome
                  size={28}
                  name='user'
                  color={color}
               />,
            }}
         />

         {/* Oculta o index da Tab */}
         <Tabs.Screen
            name="index"
            options={{
               href: null
            }}
         />
      </Tabs>
   )
}