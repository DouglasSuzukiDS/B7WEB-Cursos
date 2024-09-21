import { router, Stack, useLocalSearchParams } from "expo-router"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button } from "../../components/button"
import { getProductById } from "../../services/products"

export default function Screen() {
   const { id } = useLocalSearchParams()
   const idProduct = parseInt(id as string)

   const product = getProductById(idProduct)

   if(!product) return router.back()

   const handleBuyButton = () => {
      alert(`Produto: ${ product.title }`)
   }

   return(
      <SafeAreaView style={ styles.constainer }>
         <Stack.Screen 
            options={{ 
               headerTitleAlign: 'center',
               title: product.title,
            }} 
         />

         <ScrollView style={ styles.area }>
            <Image
               style={ styles.img}
               source={{ uri: product.image }}
               resizeMode="cover"
            />

            <Text style={ styles.title }>
               { product.title }
            </Text>

            <Text style={ styles.description }>
               { product.description }
            </Text>

            <View style={ styles.priceArea }>
               <Text style={ styles.price }>
                  R$ { product.price.toFixed(2) } 
               </Text>
            </View>
         </ScrollView>

         <View style={ styles.buttonArea }>
            <Button
               title="Comprar Agora"
               onPress={ handleBuyButton }
            />
         </View>

      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   constainer: {
      flex: 1
   },

   area: {
      flex: 1,
      padding: 10
   },

   buttonArea: {
      padding: 10
   },

   img: {
      width: '100%',
      height: 250,
      borderRadius: 10,
      marginBottom: 20
   },
    
   title: {
      fontSize: 27,
      fontWeight: 'bold',
      marginBottom: 10
   },

   description: {
      fontSize: 15,
      color: '#555',
      marginBottom: 10
   },

   priceArea: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#CCC'
   },

   price: {
      fontSize: 22,
      textAlign: 'center',
   }
})