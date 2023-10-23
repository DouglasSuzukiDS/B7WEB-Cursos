// (11) Type e Interface - Como usar e Diferencas

type Idade = string | number

let idade: Idade = 90

function mostrarIdade(i: Idade): Idade {
   return i
}

/*type User = { // Uma vez criação, não é possível alterar
   nome: string,
   idade: number
}*/

interface User { // É possível modificar
   nome: string,
   // idade: number
}

interface User { idade: number } // Pega os dados e insere o novo

// function resumo(usuario: {nome: string, idade: number}) {
function resumo(usuario: User) {
   return `Olá ${usuario.nome}, você tem ${usuario.idade}`
}

resumo({
   nome: 'Kaido',
   idade: 60
})

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro