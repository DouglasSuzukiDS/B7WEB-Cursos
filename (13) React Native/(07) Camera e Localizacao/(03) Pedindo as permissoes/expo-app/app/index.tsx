import { useCameraPermissions } from "expo-camera";
import { Button, StyleSheet, Text, View } from "react-native";
export default function Screen() {
   const [permission, requestPermission] = useCameraPermissions()

   if (!permission) return <View />

   if (!permission.granted) {
      return (
         <View>
            <Text>Você precisa dar permissão para exibir a camera.</Text>
            <Button
               title="Pedir permissão"
               onPress={requestPermission}
            />
         </View>
      )
   }

   return (
      <View style={styles.container}>
         <Text>Expo amera</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {

   }
})