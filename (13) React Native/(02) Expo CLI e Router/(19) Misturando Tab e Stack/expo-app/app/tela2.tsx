import { StyleSheet, Text, View } from "react-native";

export default function Screen() {

   return(
      <View style={ styles.container }>

         <Text>Tela 02</Text>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },

   button: {
      width: 200,
      height: 40,
      backgroundColor: "#F00",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10
   }
})