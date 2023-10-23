type Props = {
   label: string
   onClick: () => void
}

export const CustomButton = ({ label, onClick }: Props ) => {
   const handleButtonClick = () => {
      // Antes
      onClick()
      // Depois
   }

   return(
      <button 
         className="p-3 mr-3 rounded-md text-white bg-blue-700"
         // onClick={ onClick }
         onClick={ handleButtonClick }>
         { label }
      </button>
   )
}