import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Header } from '../components/header'


export default function Screen() {
   return(
      <>
         <StatusBar translucent={ false } />
         
         <ScrollView className='h-screen bg-white'>
            <Header />
         </ScrollView>
      </>
   )
}