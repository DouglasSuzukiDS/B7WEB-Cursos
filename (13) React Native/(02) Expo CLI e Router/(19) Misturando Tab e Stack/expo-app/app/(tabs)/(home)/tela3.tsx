import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Screen() {

   return(
      <View style={ styles.container }>

         <Text>Tela 03</Text>

         <Link href='/tela4'>ir para Tela 04</Link>

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