import { FlatList, StyleSheet, Text, View } from "react-native"
import { ProductItem } from "../../../components/product-item"
import { getProductsByCategory } from "../../../services/products"
import { router, Stack, useLocalSearchParams } from "expo-router"
import { getCategoryById } from "../../../services/category"

export default function Screen() {
   const { id } = useLocalSearchParams()
   const idCategory = parseInt(id as string)

   const category = getCategoryById(idCategory)

   if (!category) return router.back()

   const products = getProductsByCategory(idCategory)

   return(
      <View style={ styles.container }>
         <Stack.Screen 
            options={{ 
               title: category.title,
               headerTitleAlign: 'center',
            }} />

         <FlatList
            data={ products }
            renderItem={({ item }) => 
               <ProductItem data={ item } />
            }
            keyExtractor={ item => item.id.toString() }
            style={ styles.list}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   list: {
      flex: 1,
      width:  '100%',
      padding: 20
   }
})