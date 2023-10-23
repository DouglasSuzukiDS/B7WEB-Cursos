import { Conditional01 } from "@/exercises/(13)Conditional01"

function Page () {
  const fullTime = new Intl.DateTimeFormat('pt-br', {
    timeStyle: 'short',
    hour12: false
  }).format()

  const hour = new Date().getHours()
  let greeting = ''

  if(hour >= 0 && hour < 12) {
    greeting = 'Bom dia 😀'
  } else if(hour >= 12 && hour < 18) {
    greeting = 'Boa tarde 🤓'
  } else if(hour >= 18 && hour <= 23) {
    greeting = 'Boa noite 😴'
  }

  return(
    <div className="w-screen h-screen flex flex-col justify-center text-white items-center bg-gradient-to-r from-cyan-500 to-indigo-500">
      <div className="text-9xl">{ fullTime }</div>

      <div className="text-5xl font-bold">{ greeting }</div>
      
      <h1>-------------- Minha solução ---------------</h1>
      <Conditional01 />
    </div>

  )
}

export default Page