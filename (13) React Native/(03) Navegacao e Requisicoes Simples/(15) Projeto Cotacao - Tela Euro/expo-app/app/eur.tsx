import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getEUR } from "../services/awesomeApi";

export default function Screen() {
   const [loading, setLoading] = useState(true)
   const [currencyValue, setCurrencyValue] = useState<number>(0)

   const updateCurrency = async() => {
      setLoading(true)
      const euro = await getEUR()
      setLoading(false)
      setCurrencyValue(euro)
   }

   useEffect(() => {
      updateCurrency()
   }, [])

   return(
      <View style={ styles.container }>
         <Image 
            source={ require('../assets/euro.png') }
            resizeMode="contain"
            style={ styles.logo }
         />

         { loading && 
            <Text style={ styles.h2 }>
               Carregando ...
            </Text>
         }

         { !loading &&
            <>
               <Text style={ styles.h2 }>
                  O euro está:
               </Text>
               <Text style={ styles.currencyText }>
                  R$ { currencyValue.toFixed(2) }
               </Text>

               <Button
                  label="Atualizar"
                  onPress={ updateCurrency }
               />
            </> 
         }

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