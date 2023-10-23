export default function Home() {
  return (
    <main className="container mx-auto">
      <div className='rounded-xl overflow-hidden p-6 bg-slate-800 md:flex md:p-0'>

        <div className="w-24 h-24 bg-cover bg-center rounded-full mx-auto md:w-48 md:h-auto md:rounded-none bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/BenFranklinDuplessis.jpg/1200px-BenFranklinDuplessis.jpg)]"></div>

        <div className="grow pt-6 text-center md:p-8 md:text-left">
          <p className="text-lg text-white">'Me fale e eu esqueo. Me ensine e eu lembro. Me envolva e eu aprendo de verdade.'</p>

          <p className="mt-3 font-bold text-sky-400">Benjamin Franklin</p>
          <p className="text-slate-500">Político, EUA</p>
        </div>

      </div>
    </main>
  )
}
