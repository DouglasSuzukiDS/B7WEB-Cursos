import { Botao } from "./components/Botao"
import { Pessoa } from "./components/Pessoa"

const App = () => {
  let list = [
    {name: 'Shanks', age: 42},
    {name: 'Kaido', age: 65},
    {name: 'Bigmom', age: 65},
    {name: 'Luffy', age: 18},
  ]

  return (
    <div>
      <h2>Lista de Yonkous</h2>

      <ul>
        { list.map((item, index) => (
          // <li key={index}>{item.name} - {item.age}</li>

          <Pessoa key={index} data={item} />

        )) }
      </ul>
    </div>
  )
}

export default App