import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {

   const handleNavigate = () => {
      router.navigate('/sobre')
   }

   return (
      <View style={styles.container}>
         <Text>Home APP</Text>

         <Button
            title="Ir para Sobre"
            onPress={handleNavigate} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   }
})