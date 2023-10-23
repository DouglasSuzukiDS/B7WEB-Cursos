export default function Home() {
  return (
    <main className="container mx-auto">
      
     <div className="group bg-blue-100 p-3 hover:bg-green-700">
        <p className="text-black group-hover:text-white">Texto 01</p>
        <p className="text-gray-500  group-hover:text-white">Texto 02</p>
     </div>

     <div className="group/item bg-blue-100 p-3 hover:bg-green-700">
        <p className="text-black group-hover/item:text-white">Texto 01</p>
        <p className="text-gray-500  group-hover/item:text-white">Texto 02</p>
     </div>

    </main>
  )
}
