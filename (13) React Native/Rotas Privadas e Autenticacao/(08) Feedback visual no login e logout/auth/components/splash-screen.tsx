import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

export const SplashScreen = () => {
   return (
      <View style={styles.container}>
         <ActivityIndicator size="large" />
         <Text>Carregando...</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
})