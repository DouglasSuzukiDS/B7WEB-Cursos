import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { router } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export const CustomDrawer = (props: DrawerContentComponentProps) => {
   const handleMenuButton = () => {
      // props.navigation.toggleDrawer()
      router.push('/about')
   }

   return(
      <DrawerContentScrollView { ...props }>
         <View style={ styles.headerArea }>

         </View>

         <DrawerItemList { ...props } />

         <DrawerItem
            label='Algum Menu'
            onPress={ handleMenuButton }
         />
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