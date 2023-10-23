// (15) Type para Funcoes

type MathFunction = (n1: number, n2: number) => number // Return

const somar: MathFunction = (n1, n2) => {
   return n1 + n2
}

const subtrair: MathFunction = (n1, n2) => {
   return n1 - n2
}

const multiplicar: MathFunction = (n1, n2) => {
   return n1 * n2
}

const dividir: MathFunction = (n1, n2) => {
   return n1 / n2
}

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro