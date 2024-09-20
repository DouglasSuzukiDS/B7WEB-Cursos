import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function About() {
   return(
      <View style={ styles.container }>
         <Text>Tela Sobre</Text>

         <Link href='/' asChild>{/* asChild diz para não se comportar como um componente */}
            <Pressable style={ styles.button }>
               <Text>Ir para Home</Text>
            </Pressable>
         </Link>
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
      backgroundColor: "#0F0",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10
   }
})