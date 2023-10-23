/*function App() {
  return <div>Hello World</div>
}*/

const App = () => {
  let name:string = 'Edward'
  let lasrName: string = 'Newgate'
  let n1: number = 10
  let n2: number = 3
  let link: string = 'https://b7web.com.br'

  function somar(n1:number, n2: number): number {
    return n1 + n2
  }

  return (
    <div>
      {/* Hello {name} */}
      Multiplicação: { n1 * n2 } <br/>
      Soma: { somar(n1, n2) } <br/>
      Nome: { `${name.toUpperCase()} ${lasrName.toLowerCase()}` } <br/>
      Link para o site: <br/>
      <a href={link}>Clique aqui para acessar o site</a>
    </div>
  )
}

export default App