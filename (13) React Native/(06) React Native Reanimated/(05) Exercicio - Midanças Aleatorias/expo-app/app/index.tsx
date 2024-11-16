import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function Screen() {
   const boxSize = useSharedValue(100)
   const width = useSharedValue(100)

   const animatedStyles = useAnimatedStyle(() => ({
      // width: boxSize.value,
      // height: boxSize.value

      width: withSpring(boxSize.value, { duration: 1000 }),
      height: withSpring(boxSize.value, { duration: 1000 })
   }))

   const handlePress = () => {
      let randomSize = Math.floor(Math.random() * 250)
      if (randomSize < 30) randomSize = 30

      boxSize.value = randomSize

      /*width.value = withSpring(width.value + 30, {
         duration: 2000,
         dampingRatio: 1
      })*/
   }

   return (
      <SafeAreaView>
         <Text>Hello World</Text>

         <View style={styles.area}>
            <Animated.View
               style={[styles.box, animatedStyles]}>
            </Animated.View>
         </View>

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