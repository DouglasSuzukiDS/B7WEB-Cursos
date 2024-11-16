import { Button, SafeAreaView, Text } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";

export default function Screen() {
   const width = useSharedValue(100)

   const handlePress = () => {
      width.value = width.value + 30
   }

   return (
      <SafeAreaView>
         <Text>Hello World</Text>

         <Animated.View
            style={{
               width,
               height: 100,
               backgroundColor: "red"
            }}>
         </Animated.View>

         <Button title="Clique aqui" onPress={handlePress} />
      </SafeAreaView>
   )
}