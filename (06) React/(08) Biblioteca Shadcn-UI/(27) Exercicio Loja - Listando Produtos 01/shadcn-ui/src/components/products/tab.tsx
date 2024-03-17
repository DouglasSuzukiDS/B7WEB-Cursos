import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from "@/services/product"

export const ProductsTab = async() => {
   const products = await getAllProducts()

   return(
      <Tabs defaultValue="tab01">
         <TabsList className="flex">
            <TabsTrigger
               value="tab01"
               className="flex-1">
               Tab 01
            </TabsTrigger>

            <TabsTrigger 
               value="tab02"
               className="flex-1">
               Tab 02
            </TabsTrigger>
         </TabsList>

         <TabsContent value="tab01" className="mt-6">
            Conteúdo da Tab 01
         </TabsContent>

         <TabsContent value="tab02"  className="mt-6">
            Conteúdo da Tab 02
         </TabsContent>
      </Tabs>
   )
}