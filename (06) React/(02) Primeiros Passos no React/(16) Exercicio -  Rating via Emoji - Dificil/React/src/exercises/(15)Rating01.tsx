type Props = {
   note: number
}

export const Rating = ({ note }: Props) => {
   return(
      <div>
         <h1 className="ml-2">{ note }.0</h1>

         { note === 0 && '😶😶😶😶😶' }
         { note === 1 && '😀😶😶😶😶' }
         { note === 2 && '😀😀😶😶😶' }
         { note === 3 && '😀😀😀😶😶' }
         { note === 4 && '😀😀😀😀😶' }
         { note === 5 && '😀😀😀😀😀' }
      </div>
   )
}