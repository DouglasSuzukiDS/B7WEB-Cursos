import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../components/logo'
import { CustomButton } from '../components/custom-button'


export default function Screen() {
   return(
      <View className='h-screen bg-blue-700 justify-center items-center'>
         <Logo />

         <View className='w-full px-5 mt-20'>
            <CustomButton 
               label='Cadastre-se'
               onPress={ () => {} }
            />

            <CustomButton 
               label='Login'
               onPress={ () => {} }
            />
         </View>
      </View>
   )
}