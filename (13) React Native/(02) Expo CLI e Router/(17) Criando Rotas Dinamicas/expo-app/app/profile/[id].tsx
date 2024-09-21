import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Screen() {
   const { id } = useLocalSearchParams()

   return(
      <View style={ styles.container }>
         <Stack.Screen options={{ title: `Perfil ${ id }` }} />
         <Text>Tela do Perfil { id }</Text>

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