// (08) Types em Objetos

function resumo(usuario: {nome: string, idade: number}) {
   return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade}`
}

// Implementação da função
let u = {
   nome: 'Kaido',
   idade: 60
}

resumo(u)

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro