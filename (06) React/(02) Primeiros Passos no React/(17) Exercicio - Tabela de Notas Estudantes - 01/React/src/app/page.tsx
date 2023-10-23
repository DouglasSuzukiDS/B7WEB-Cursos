import { StudentTable } from "@/components/StudentTable"
import { students } from "@/data/students"

function Page () {
  
  return(
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5">Lista de Estudantes 4:17</h1>
      <StudentTable students={ students } />
    </div>

  )
}

export default Page