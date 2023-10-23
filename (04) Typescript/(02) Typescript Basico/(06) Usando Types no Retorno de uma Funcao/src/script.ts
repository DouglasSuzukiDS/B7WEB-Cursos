// (06) Usando Types no Retorno de uma Função 

function firstLetterUpperCase(name: string): string { // Informa que a função tera o retorno desse tipo
   let firstLetter = name.charAt(0).toUpperCase() // First Letter
   return firstLetter + name.substring(1) // 2 letter onwards
   //return 90
}

let nome = firstLetterUpperCase('Shanks')

function somar(n1: number, n2: number): number {
   return n1 + n2
}

let algum = somar(90, 15)

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro