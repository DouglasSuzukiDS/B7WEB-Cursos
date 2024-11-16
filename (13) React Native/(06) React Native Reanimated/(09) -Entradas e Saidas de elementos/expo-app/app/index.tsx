import { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from "react-native-reanimated";
import { User } from "../components/User";

export default function Screen() {
   const [list, setList] = useState([1, 2])

   const handleAddPerson = () => {
      setList([...list, list.length + 1]);
   }

   return (
      <SafeAreaView>
         <Text>Hello World</Text>

         {list.map((item, index) => (
            <User key={index} name={`Pessoa ${item}`} />
         ))}

         <Button title="Adicionar" onPress={handleAddPerson} />
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