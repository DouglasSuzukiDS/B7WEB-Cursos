import { BarcodeScanningResult, CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type CameraFacing = 'front' | 'back'

type CameraFlash = 'on' | 'off' | 'auto'
export default function Screen() {
   const [permission, requestPermission] = useCameraPermissions()
   const [cameraFacing, setCameraFacing] = useState<CameraFacing>('front')
   const [cameraFlash, setCameraFlash] = useState<CameraFlash>('off')
   const [qrResult, setQrResult] = useState('')
   const [cameraZoom, setCameraZoom] = useState(0)

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

   const handleCameraFlash = () => {
      switch (cameraFlash) {
         case 'off':
            setCameraFlash('on')
            break
         case 'on':
            setCameraFlash('auto')
            break
         case 'auto':
            setCameraFlash('off')
            break
      }
   }
   const handleBarCode = (result: BarcodeScanningResult) => {
      // console.log(result)
      setQrResult(result.data)
   }

   return (
      <View style={styles.container}>
         <CameraView
            style={styles.camera}
            facing={cameraFacing}
            flash={cameraFlash}
            zoom={cameraZoom}
            onBarcodeScanned={handleBarCode}>

         </CameraView>

         <View>
            <Button
               title="Virar camera"
               onPress={handleCameraFacing}
            />

            <View>
               <Text>FLASH: {cameraFlash}</Text>
               <Button
                  title="Mudar Flash"
                  onPress={handleCameraFlash} />
            </View>

            <View>
               <Text>QR Result: {qrResult}</Text>
            </View>

            <View style={styles.zoomContainer}>
               <Button
                  title="0%"
                  onPress={() => setCameraZoom(0)} />
               <Button
                  title="25%"
                  onPress={() => setCameraZoom(0.25)} />

               <Button
                  title="50%"
                  onPress={() => setCameraZoom(0.50)} />

               <Button
                  title="75%"
                  onPress={() => setCameraZoom(0.75)} />

               <Button
                  title="100%"
                  onPress={() => setCameraZoom(1)} />
            </View>
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
   },

   zoomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
   }
})