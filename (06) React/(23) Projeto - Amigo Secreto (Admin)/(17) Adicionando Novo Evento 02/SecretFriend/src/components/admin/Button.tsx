type Props = {
   value: string
   onClick: () => void
   disabed?: boolean
}

export const Button = ({ value, onClick, disabed }: Props) => {
   return(
      <button
         onClick={ onClick }
         className="w-full my-3 p-3 rounded bg-gray-700 text-white text-center uppercase font-bold hover:bg-gray-600 border-b-4 border-white/10"
         disabled={ disabed }
      >
         { value }
      </button>
   )
}