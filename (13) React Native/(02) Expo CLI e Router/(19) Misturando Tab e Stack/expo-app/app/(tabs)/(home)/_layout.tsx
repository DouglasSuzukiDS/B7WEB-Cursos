import { Stack } from "expo-router";

export default function HomeLayout() {
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
         <Stack.Screen name="tela3" options={{ headerShown: false }} />
         <Stack.Screen name="tela4" />
      </Stack>
   )
}