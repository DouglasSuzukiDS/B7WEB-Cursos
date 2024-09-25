import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { router } from "expo-router"
import { Button, StyleSheet, Text, View } from "react-native"

export const CustomDrawer = (props: DrawerContentComponentProps) => {
   const handleMenuButton = () => {
      // props.navigation.toggleDrawer()
      router.push('/about')
   }

   return(
      <DrawerContentScrollView { ...props }>
         <View style={ styles.headerArea }>

         </View>

         <Button 
            title="Home"
            onPress={ () => router.navigate('/') } />

         <Button 
            title="Sobre"
            onPress={ () => router.navigate('/about') } />
      </DrawerContentScrollView>
   )
}

const styles = StyleSheet.create({
   scrollView: {
      backgroundColor: '#000'
   },

   headerArea: {
      backgroundColor: "#F00",
      height: 80,
      alignItems: "center",
      justifyContent: "center",
   }
})