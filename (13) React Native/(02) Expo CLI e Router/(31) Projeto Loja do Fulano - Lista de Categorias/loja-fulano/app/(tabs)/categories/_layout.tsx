import { Stack } from "expo-router";

export default function CategoryLauoyt() {
   return(
      <Stack>
         <Stack.Screen 
            name="list"
            options={{ 
               headerTitleAlign: 'center',
               title: 'Categorias',
            }} />
      </Stack>
   )
}