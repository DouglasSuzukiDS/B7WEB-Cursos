export default function Home() {
  return (
    <main className="container mx-auto">
      
      <div className="p-3 rounded-md bg-gray-400">
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
            <div className="w-full h-60 bg-cover bg-center md:col-span-2 md:row-span-2 md:h-full bg-[url(https://www.luxuryproperties.com.br/exportacao/fotos/20200729T1911100300-137010094.jpg)]"></div>

            <div className="w-full h-60 bg-cover bg-center bg-[url(https://www.luxuryproperties.com.br/exportacao/fotos/20200729T1934230300-36126538.jpg)]"></div>

            <div className="w-full h-60 bg-cover bg-center bg-[url(https://www.luxuryproperties.com.br/exportacao/fotos/20200729T1934230300-704204357.jpg)]"></div>
        </div>

        <div className="text-2xl font-bold mt-3">Título da Casa</div>

        <div className="flex gap-2 mt-3">
          <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Campo</div>
          <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Moderno</div>
          <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Piscina</div>
        </div>

      </div>

    </main>
  )
}
