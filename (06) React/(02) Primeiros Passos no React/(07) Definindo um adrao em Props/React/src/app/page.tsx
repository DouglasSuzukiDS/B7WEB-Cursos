import { Circle } from "@/components/Circle"
import { GeoForm } from "@/components/GeoForm"
import { Person } from "@/components/Person"
import { Square } from "@/components/Square"

function Page () {
  return(
    <div className="font-bold text-2xl">
      <h1>Hello World</h1>

      {/* <Square />
      <Circle /> */}
      <GeoForm />

      <Person
        name='Tonhao' 
        avatar= 'https://static.wikia.nocookie.net/penguinsofmadagascar/images/5/51/MotoMoto2.jpg/revision/latest?cb=20120622005912'
        roles={ ['Agiota', 'Empresário'] } />

      <Person
        name='Moto Moto' 
        roles={ ['Empresário'] } />
    </div>

  )
}

export default Page