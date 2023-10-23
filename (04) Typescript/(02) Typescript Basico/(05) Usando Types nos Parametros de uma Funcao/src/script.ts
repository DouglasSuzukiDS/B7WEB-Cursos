// (05) Usando Types nos Parametros de uma Função 

function firstLetterUpperCase(name: string) {
   let firstLetter = name.charAt(0).toUpperCase() // First Letter
   return firstLetter + name.substring(1) // 2 letter onwards
}

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro