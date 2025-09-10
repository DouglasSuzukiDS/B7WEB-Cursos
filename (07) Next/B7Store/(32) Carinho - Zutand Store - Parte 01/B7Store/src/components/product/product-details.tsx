'use client'

import { ProductComplete } from "@/types/product"
import Image from "next/image"

type Props = {
   product: ProductComplete
}
export const ProductDetails = ({ product }: Props) => {
   const addToCart = async () => {
      
   }

   return (
      <div className="flex-1">
         <div className="text-xs text-gray-500 mb-2">Cod {product.id}</div>

         <div className="font-bold text-3xl mb-6">{product.label}</div>

         <div className="font-bold text-4xl text-blue-600 mb-2">R$ {product.price.toFixed(2)}</div>

         <div className="text-sm text-gray-500 mb-6">Em até 12x no cartão</div>

         <div className="flex gap-4">
            <button
               className="flex-1 max-w-xs text-white py-4 px-8 bg-blue-600 rounded-sm cursor-pointer hover:opacity-90"
               onClick={addToCart}>Adiciona ao carrinho</button>

            <div className="cursor-pointer size-14 border border-gray-200 flex justify-center items-center rounded-sm">
               <Image
                  src={'/assets/ui/heart-3-line.png'}
                  alt={'Favoritar'}
                  width={24} height={24} />
            </div>

            <div className="cursor-pointer size-14 border border-gray-200 flex justify-center items-center rounded-sm">
               <Image
                  src={'/assets/ui/share-line.png'}
                  alt={'Compartilhar'}
                  width={24} height={24} />
            </div>
         </div>

      </div>
   )
}