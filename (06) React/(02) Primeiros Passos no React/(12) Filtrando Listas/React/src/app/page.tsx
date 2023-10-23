import { peopleList } from "@/data/PeopleList"

function Page () {
  const list = peopleList.map(person => <li>{ person.name }</li>)

  const chemists = peopleList.filter(person => person.profession === 'Chemist')
  
  return(
    <div className="font-bold text-2xl">
      <h1>Hello World</h1>

      { chemists.length > 0 &&
        <>
          <h3>Lista de Químicos:</h3>

          <ul>
            { chemists.map(person =>
                <li key={ person.id }>{ person.name }</li>
              ) }
          </ul>
        </>
      }
    </div>

  )
}

export default Page