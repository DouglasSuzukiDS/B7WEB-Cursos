import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function Screen() {
   const width = useSharedValue(100)

   const animatedStyles = useAnimatedStyle(() => ({
      width: width.value
   }))

   const handlePress = () => {
      width.value = withSpring(width.value + 30, {
         duration: 2000,
         dampingRatio: 1
      })
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
   box: {
      width: 100,
      height: 100,
      backgroundColor: "blue"
   }
})