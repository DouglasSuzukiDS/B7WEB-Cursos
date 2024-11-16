import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function Screen() {
   const width = useSharedValue(100)

   const animatedStyles = useAnimatedStyle(() => ({
      width: width.value
   }))

   const handlePress = () => {
      width.value = width.value + 30
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