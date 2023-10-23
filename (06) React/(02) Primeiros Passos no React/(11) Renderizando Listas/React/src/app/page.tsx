import { peopleList } from "@/data/PeopleList"

function Page () {
  const list = peopleList.map(person => <li>{ person.name }</li>)
  
  return(
    <div className="font-bold text-2xl">
      <h1>Hello World</h1>

      { peopleList.length > 0 &&
        <ul>
          {/* { list } */}
          { peopleList.map(person => 
            <li key={ person.id }>{ person.name } - { person.profession } </li>)
          }
        </ul>
      }
    </div>

  )
}

export default Page