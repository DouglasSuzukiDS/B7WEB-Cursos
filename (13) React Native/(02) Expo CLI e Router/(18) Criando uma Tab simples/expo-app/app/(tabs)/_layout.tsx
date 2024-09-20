import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TabLayout() {
   return (
      <Tabs screenOptions={{ 
         headerTitleAlign: 'center',
         tabBarActiveTintColor: '#F00'
      }}>
         <Tabs.Screen
            
            name="index"
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
      </Tabs>
   )
}