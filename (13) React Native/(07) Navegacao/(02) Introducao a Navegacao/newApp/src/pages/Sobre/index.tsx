import { StyleSheet, Text, View } from "react-native"

export const Sobre = () => {
   return (
      <View style={styles.container}>
         <Text>Sobre</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
})