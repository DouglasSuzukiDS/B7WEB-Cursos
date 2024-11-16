import { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from "react-native-reanimated";

export default function Screen() {
   const offsetX = useSharedValue(0)

   const animatedStyles = useAnimatedStyle(() => ({
      transform: [{ translateX: offsetX.value }]
   }))

   const handlePress = () => {

      offsetX.value = withRepeat(
         withTiming(200),
         2,
         true
      )
   }

   return (
      <SafeAreaView>
         <Text>Hello World</Text>

         <Animated.View
            style={[styles.box, animatedStyles]}>
         </Animated.View>

         <Button title="Clique aqui" onPress={handlePress} />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   area: {
      width: 300,
      height: 300,
      backgroundColor: '#CCC',
      justifyContent: 'center',
      alignItems: 'center',
   },

   box: {
      width: 100,
      height: 100,
      backgroundColor: "blue",
      borderRadius: 20
   },

})