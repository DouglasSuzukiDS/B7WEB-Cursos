import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Header } from '../components/header'
import { ButtonCard } from '../components/button-card'
import { ButtonAction } from '../components/button-action'
import { ButtonGeneral } from '../components/button-general'
import Icon from '@expo/vector-icons/FontAwesome6'

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

            <View className='px-4 py-6'>
               <ButtonGeneral onPress={ () => {} }>
                  <View className='flex-row items-center'>
                     <Icon name='credit-card' size={ 28 } color='black' />

                     <Text className='ml-4 text-xl font-semibold'>
                        Meus cartões
                     </Text>
                  </View>
               </ButtonGeneral>
            </View>

            <ScrollView horizontal  showsHorizontalScrollIndicator={ false } className='px-4'>
               <View className='w-72 mr-4'>
                  <ButtonGeneral onPress={ () => {} }>
                     <View className='flex-row flex-wrap gap-x-1'>
                        <Text className='text-lg'>Você tem </Text>
                        <Text className='text-lg font-semibold'>
                           R$ 12.300,00
                        </Text>
                        <Text className='text-lg'>
                           disponíveis para emprestimo.
                        </Text>
                     </View>
                  </ButtonGeneral>
               </View>

               <View className='w-72'>
                  <ButtonGeneral onPress={ () => {} }>
                     <Text className='text-lg font-semibold text-nubank'>
                        Guarde seu dinheiro aqui
                     </Text>
                     <Text className='text-lg'>
                        Toque para saber mais.
                     </Text>
                  </ButtonGeneral>
               </View>

            </ScrollView>

         </ScrollView>
      </>
   )
}