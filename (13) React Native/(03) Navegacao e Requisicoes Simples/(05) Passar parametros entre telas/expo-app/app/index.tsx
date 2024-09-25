import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Screen() {
   
   const handleButton = () => {
      // router.push('/about?name=NicK&age=20')

      const params = new URLSearchParams()
      params.set('name', 'Nick')
      params.set('age', '20')

      router.push(`/about?${ params.toString() }`)
   }

   return(
      <View style={ styles.container }>

         <Text>Home</Text>

         <Button 
            title="Ir para sobre (com parametro)"
            onPress={ handleButton } 
         />

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