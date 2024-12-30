import { useRoute, RouteProp } from "@react-navigation/native"
import { router, useGlobalSearchParams, useNavigation } from "expo-router"
import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native"

export default function Sobre() {
   const { name, email } = useGlobalSearchParams()

   type RouterParams = {
      params: {
         name: string
         email: string
      };
   };

   const route = useRoute<RouteProp<RouterParams>>()
   const navigation = useNavigation()

   useLayoutEffect(() => { // Assincrono => Só deixa passar após as funções terminarem
      navigation.setOptions({
         title: route.params.name === '' ? 'Página Sobre' : route.params.name
      })
   }, [navigation])

   return (
      <View style={styles.container}>
         <Text>Página Sobre</Text>
         <Text>Nome: {route.params.name}</Text>
         <Text>Email: {email}</Text>

         <Button
            title="Contato"
            onPress={() => router.navigate('/contato')}
         />

         <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
   },
})