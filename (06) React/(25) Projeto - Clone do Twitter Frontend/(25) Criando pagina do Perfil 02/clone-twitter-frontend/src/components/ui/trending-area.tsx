import { TrendingItem, TrendingItemSkeleton } from "./trending-item"

export const TrendingArea = () => {
   return(
      <div className="bg-gray-700 rounded-3xl">
         <h2 className="text-xl p-6">
            O que esta acontecendo
         </h2>

         <div className="flex flex-col gap-4 p-6 pt-0">
            <TrendingItem label="#React" count={1293} />
            <TrendingItem label="#Node" count={1293} />
            <TrendingItemSkeleton />
            <TrendingItemSkeleton />
         </div>
      </div>
   )
}