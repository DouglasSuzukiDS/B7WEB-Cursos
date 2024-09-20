import { Link, router, Stack, useNavigation } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";


export default function Screen() {
   const navigation = useNavigation()

   const handleClick = () => {
      router.navigate('/about')
      // Navigate => Mantem o histórico de navegação
      // Push => Mantem o histórico de navegação mas recriando os acessos mesmo se já acessou a página
      // Replace => Não permite voltar a página anterior. Usado por exemplo quando o usuário já fez o login e ele não pode voltar para a página de login novamente.
   }

   return(
      <View style={ styles.container }>

         <Text>Hello World</Text>

         <Pressable style={ styles.button } onPress={ handleClick }>
            <Text>Ir para Sobre</Text>
         </Pressable>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },

   button: {
      width: 200,
      height: 40,
      backgroundColor: "#F00",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10
   }
})