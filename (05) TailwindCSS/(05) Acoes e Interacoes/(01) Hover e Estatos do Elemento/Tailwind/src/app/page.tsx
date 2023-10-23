export default function Home() {
  return (
    <main className="container mx-auto">
      
     <button className="bg-red-200 p-4 hover:bg-blue-200 active:bg-green-200">Clique</button>

     <input type="text" className="w-full h-7 border-2 border-blue-200 m-3 focus:bg-green-200" />

     <input disabled type="text" className="w-full h-7 border-2 border-blue-200 m-3 focus:bg-green-200 disabled:bg-red-200" />

     <input type="file" className="w-full h-7 border-2 border-blue-200 m-3 focus:bg-green-200 disabled:bg-red-200 file:bg-green-600 file:text-white" />

    </main>
  )
}
