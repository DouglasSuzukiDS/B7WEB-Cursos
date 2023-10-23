// (12) Type Assertions => Seria informa ao TS o tipo do elemento

let idadeField = document.getElementById('idade') as HTMLInputElement

// ...

console.log(idadeField.value)

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro