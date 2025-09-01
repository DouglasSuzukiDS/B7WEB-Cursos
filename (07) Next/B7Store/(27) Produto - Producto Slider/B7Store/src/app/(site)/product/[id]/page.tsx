import { ImageSlider } from "@/components/product/image-slider"
import { ProductDescription } from "@/components/product/product-description"
import { ProductDetails } from "@/components/product/product-details"
import { data } from "@/data"
import Link from "next/link"

type Props = {
   params: Promise<{ id: string }>
}
export default async function Page({ params }: Props) {
   const { id } = await params

   return (
      <div>
         <div className="text-gray-500 mb-4">
            <Link href={`/`}>Home</Link> &gt;
            <Link href={`/`}>Camisas</Link> &gt;
            {data.product.label}
         </div>

         <div className="flex flex-col md:flex-row gap-32">
            <ImageSlider images={data.product.images} />

            <ProductDetails product={data.product} />

            <ProductDescription text={data.product.description} />
         </div>

         <div>
            <h3>Você também pode gostar: </h3>
            ---
         </div>
      </div>
   )
}