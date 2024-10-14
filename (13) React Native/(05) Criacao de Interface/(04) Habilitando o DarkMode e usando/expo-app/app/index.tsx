import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Screen() {
   const { colorScheme, setColorScheme } = useColorScheme()

   return(
      <View className='h-min-screen bg-white dark:bg-black'>
         <StatusBar style={`dark`} />
         <Text className="text-3xl text-black dark:text-white">Título</Text>
         <Text className="text-xl text-black dark:text-white">Scheme: { colorScheme }</Text>
         
         <Button title='DARK' onPress={ () => setColorScheme('dark') } />

         <Button title='LIGHT' onPress={ () => setColorScheme('light') } />

         <Button title='SYSTEM' onPress={ () => setColorScheme('system') } />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   h1: {
      fontSize: 24,
      textAlign: 'center',
      marginVertical: 20,
   }
})