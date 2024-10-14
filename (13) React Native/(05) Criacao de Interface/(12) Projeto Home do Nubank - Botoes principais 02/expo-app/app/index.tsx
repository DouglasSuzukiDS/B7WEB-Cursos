import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Header } from '../components/header'
import { ButtonCard } from '../components/button-card'
import { ButtonAction } from '../components/button-action'


export default function Screen() {
   return(
      <>
         <StatusBar translucent={ false } />

         <ScrollView   className='h-screen bg-white'>
            <Header />

            <ButtonCard title='Conta' onPross={ () => {} }>
               <Text className='text-2xl font-semibold'>
                  R$ 1.000,00
               </Text>
            </ButtonCard>

            <ScrollView horizontal showsHorizontalScrollIndicator={ false } className='px-3'>
               <ButtonAction 
                  icon='pix'
                  label='Pix'
                  onPress={ () => {} }
               />

               <ButtonAction 
                  icon='barcode'
                  label='Pagar'
                  onPress={ () => {} }
               />

               <ButtonAction 
                  icon='hand-holding-dollar'
                  label='Pega emprestado'
                  badge='R$ 12.300'
                  onPress={ () => {} }
               />

               <ButtonAction 
                  icon='money-bill-transfer'
                  label='Transferir'
                  onPress={ () => {} }
               />

               <ButtonAction 
                  icon='receipt'
                  label='Dinheiro'
                  onPress={ () => {} }
               />
            </ScrollView>
         </ScrollView>
      </>
   )
}