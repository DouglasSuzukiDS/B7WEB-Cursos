import { Stack } from "expo-router";

export default function RootLayout() {
   return (
      // Seria a 'label' de identificação da página
      <Stack screenOptions={{
         headerShown: false,
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
         <Stack.Screen name="(tabs)" />
      </Stack>
   )
}