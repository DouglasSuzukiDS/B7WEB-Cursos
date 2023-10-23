import { Photo } from "@/types/Photo"

type Props = {
   photo: Photo
   onClick: () => void
}

export const PhotItem = ({ photo, onClick }: Props) => {
   return(
      <div 
         className="cursor-point hover:opacity-80"
         onClick={ onClick }>
         <img src={`/assets/${photo.url}`} 
            alt={ (photo.id).toString() }  
            className="w-full" />
      </div>
   )
}