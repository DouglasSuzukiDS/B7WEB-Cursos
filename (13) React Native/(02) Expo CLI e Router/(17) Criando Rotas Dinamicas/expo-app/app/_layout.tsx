import { Stack } from "expo-router";

export default function RootLayout() {
   return (
      // Seria a 'label' de identificação da página
      <Stack screenOptions={{
         headerShown: true,
         headerTitleAlign: "center",
         headerStyle: {
            //backgroundColor: '#F00',
         },
         headerTintColor: '#000', // Seria a cordo texto do header
         headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30, 
         },

      }}>
         {/* As rotas da aplicação */}
         <Stack.Screen name='index' options={{ title: 'Home' }} />

         <Stack.Screen name='about' options={{ title: 'Sobre' }} />

         <Stack.Screen name='(aux)/termos' options={{ title: 'Termos de Uso' }} />

         <Stack.Screen name='auth/login' options={{ title: 'Login' }} />

         <Stack.Screen name='profile/[id]' />
      </Stack>
   )
}