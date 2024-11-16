import { Pressable, StyleSheet, View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

type Props = {
   status: boolean
   onChangeStatus: (newStatus: boolean) => void
}
export const Switch = ({ status, onChangeStatus }: Props) => {
   const posX = useSharedValue(status ? 50 : 0)
   const color = useSharedValue(status ? 'green' : 'red')

   const animationStyles = useAnimatedStyle(() => ({
      transform: [{ translateX: posX.value }],
      backgroundColor: color.value,
   }))

   const handlePress = () => {
      posX.value = withTiming(status ? 0 : 50, { duration: 200 })
      color.value = withTiming(status ? 'red' : 'green', { duration: 200 })
      onChangeStatus(!status)
   }

   return (
      <Pressable
         style={styles.area}
         onPress={handlePress}>
         <Animated.View style={[styles.ball, animationStyles]} />
      </Pressable>
   )
}

export const styles = StyleSheet.create({
   area: {
      width: 100,
      height: 50,
      backgroundColor: '#CCC',
      borderRadius: 25,
      justifyContent: 'center',
      padding: 5
   },

   ball: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#333',
   }
})