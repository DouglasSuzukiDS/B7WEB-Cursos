import { StackActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Contato() {
   const navigation = useNavigation()

   return (
      <View style={styles.container}>
         <Text>Página de Contato</Text>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})