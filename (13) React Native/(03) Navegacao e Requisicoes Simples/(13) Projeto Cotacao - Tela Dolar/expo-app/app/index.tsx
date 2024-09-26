import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";

export default function Screen() {
   const updateCurrency = () => {

   }
   
   return(
      <View style={ styles.container }>
         <Image 
            source={ require('../assets/dolar.png') }
            resizeMode="contain"
            style={ styles.logo }
         />

         <Text style={ styles.h2 }>
            O dolar americado está:
         </Text>
         <Text style={ styles.currencyText }>
            R$ 5,35
         </Text>

         <Button
            label="Atualizar"
            onPress={ updateCurrency }
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0B1C2D",
      paddingHorizontal: 20
   },

   logo: {
      width: 200,
      height: 180,
      marginBottom: 20
   },

   h2: {
      color: "#CCC",
      fontSize: 24,
      marginTop: 30
   }, 

   currencyText: {
      color: "#FFF",
      fontSize: 52,
      marginTop: 20,
      marginBottom: 50
   }
})