import { CartListItem } from "@/types/cart-list-item"
import Image from "next/image"

type Props = {
   item: CartListItem
}
export const CartProductItem = ({ item }: Props) => {
   return (
      <div className="flex p-6 gap-4 md:gap-8">
         <div className="border border-gray-200 p-1">
            <Image
               src={item.product.image}
               alt={item.product.label}
               width={96}
               height={96}
            />
         </div>

         <div className="flex-1 flex justify-between flex-col md:flex-row">
            <div className="">{item.product.label}</div>

            <div className="">**</div>
         </div>

         <div className="flex-1 flex justify-between flex-col md:flex-row">
            <div className="">{item.product.price.toFixed(2)}</div>

            <div className="">**</div>
         </div>
      </div>
   )
}