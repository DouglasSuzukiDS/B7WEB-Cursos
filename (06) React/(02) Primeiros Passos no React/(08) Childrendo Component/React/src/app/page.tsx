import { Card } from "@/components/Card"
import { Circle } from "@/components/Circle"
import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"
import { Square } from "@/components/Square"

function Page () {
  return(
    <div className="font-bold text-2xl">
      <h1>Hello World</h1>

      <Card>
        <>
          <h3 className="text-3xl font-bold italic">"Frase de efeito"</h3>
          <p className="text-right text-sm"> - Autor Desconhecido</p>
          <Circle />
        </>
      </Card>
    </div>

  )
}

export default Page