import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from "@/services/product"
import { Product } from "@/types/product"

export const ProductsTab = async() => {
   const products = await getAllProducts()

   type Tab = {
      title: string
      value: string
      products: Product[]
   }

   const tabs: Tab[] = [
      {
         title: 'Sushi',
         value: 'sushi',
         products: []
      },

      {
         title: 'Temaki',
         value: 'temaki',
         products: []
      },

      {
         title: 'Combinados',
         value: 'pack',
         products: []
      },

      {
         title: 'Bebidas',
         value: 'bebidas',
         products: []
      },
   ]

   return(
      <Tabs defaultValue="sushi">
         <TabsList className="flex">
            { tabs.map(item => (
               <TabsTrigger
                  key={ item.value }
                  value={ item.value }
                  className="flex-1">
                  { item.title }
               </TabsTrigger>
            )) }
         </TabsList>

         { tabs.map(item => (
            <TabsContent value={ item.value } className="mt-6">
               ***
            </TabsContent>
         )) }
      </Tabs>
   )
}