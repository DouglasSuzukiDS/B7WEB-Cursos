import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type CameraFacing = 'front' | 'back'
export default function Screen() {
   const [permission, requestPermission] = useCameraPermissions()
   const [cameraFacing, setCameraFacing] = useState<CameraFacing>('front')

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

   const handleCameraFacing = () => {
      setCameraFacing(cameraFacing === 'front' ? 'back' : 'front')
   }

   return (
      <View style={styles.container}>
         <CameraView style={styles.camera} facing={cameraFacing}>

         </CameraView>

         <View>
            <Button
               title="Virar camera"
               onPress={handleCameraFacing}
            />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   camera: {
      height: 400
   }
})