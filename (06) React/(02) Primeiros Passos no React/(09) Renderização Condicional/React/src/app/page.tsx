import { Card } from "@/components/Card"
import { Circle } from "@/components/Circle"
import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"
import { Square } from "@/components/Square"

function Page () {
  return(
    <div className="font-bold text-2xl">
      <h1>Hello World</h1>

      <Card phase="Frase legal" author="Aquele la" />
      <Card phase="Outra frase" />
    </div>

  )
}

export default Page