type Props = {
   open: boolean
   onClose: () => void
}
export const AddressModal = ({ open, onClose }: Props) => {
   if (!open) return null

   const handleSubmit = () => {

   }
   return (
      <div className="fixed inset-0 flex justify-center items-center bg-black/90 z-50">
         <button
            className="cursor-pointer absolute top-2 right-4 text-4xl text-white"
            onClick={onClose}>&times;</button>

         <div className="bg-white p-6 rounded w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Adicionar endereço</h2>

            <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-2">

            </form>
         </div>
      </div>
   )
}