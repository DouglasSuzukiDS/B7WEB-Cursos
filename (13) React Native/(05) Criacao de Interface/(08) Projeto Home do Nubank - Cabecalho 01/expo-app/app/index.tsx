import { ScrollView, Text, View } from 'react-native'
import { Header } from '../components/header'


export default function Screen() {
   return(
      <ScrollView className='h-screen bg-white'>
         <Header />
      </ScrollView>
   )
}