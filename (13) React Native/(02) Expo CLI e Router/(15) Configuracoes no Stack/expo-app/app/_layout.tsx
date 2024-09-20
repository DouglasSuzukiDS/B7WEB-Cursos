import { Stack } from "expo-router";

export default function RootLayout() {
   return (
      // Seria a 'label' de identificação da página
      <Stack screenOptions={{
         headerShown: true,
         headerTitleAlign: "center",
         headerStyle: {
            backgroundColor: '#F00',
         },
         headerTintColor: '#FFF', // Seria a cordo texto do header
         headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30, 
         },

      }}>
         {/* As rotas da aplicação */}
         <Stack.Screen name='index' options={{ title: 'Home' }} />
         <Stack.Screen name='about' options={{ title: 'Sobre' }} />
      </Stack>
   )
}