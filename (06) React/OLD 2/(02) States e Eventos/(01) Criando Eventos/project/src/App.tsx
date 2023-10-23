const App = () => {
  const handleButtonClick = () => {
    alert('O botão foi clicado')
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Clique Aqui</button>
      <button onClick={() => alert('Clicou')}>Clique Aqui</button>
    </div>
  )
}

export default App