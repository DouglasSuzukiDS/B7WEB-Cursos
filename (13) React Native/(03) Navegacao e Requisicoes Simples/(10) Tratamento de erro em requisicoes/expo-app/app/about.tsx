import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type Query = {
   name?: string
   age?: string
}

export default function Screen() {
   const { name, age } = useLocalSearchParams<Query>()

   return(
      <View style={ styles.container }>

         <Text>Sobre o Autor: { name } - { age } anos</Text>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   }
})