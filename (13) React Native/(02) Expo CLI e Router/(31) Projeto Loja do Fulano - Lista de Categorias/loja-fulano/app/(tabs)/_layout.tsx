import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from "expo-router"
import { StyleSheet } from "react-native"

export default function TabLayout() {
   return(
      <Tabs screenOptions={{     tabBarActiveTintColor: '#00F', headerTitleAlign: 'center' }}>
         <Tabs.Screen
            name="home"
            options={{
               title: "Início",
               tabBarIcon: ({ color }) =>
                  <FontAwesome 
                     size={ 20 }
                     name='home'
                     color={ color }
                  />
            }}
         />

         <Tabs.Screen
            name="categories"
            options={{
               headerShown: false,
               title: "Categocias",
               tabBarIcon: ({ color }) =>
                  <FontAwesome 
                     size={ 20 }
                     name='archive'
                     color={ color }
                  />
            }}
         />

         <Tabs.Screen
            name="about"
            options={{
               title: "Sobre",
               tabBarIcon: ({ color }) =>
                  <FontAwesome 
                     size={ 20 }
                     name='user'
                     color={ color }
                  />
            }}
         /> 
      </Tabs>
   )
}

const styles = StyleSheet.create({
   container: {

   }
})