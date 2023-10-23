// (03) Escolhendo quais arquivos compilar

// const nome: string = 'Shanks'

function blabla(n1: number): string {
   return 'O parametro era: ' + n1
}

blabla(2)

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro

// tsc src/script.ts -w = monitora as modificações
// tsc --init = Gera o arquivo tsconfig.json
// gerado o tsconfig, para gerar o arquivo .js basta digitrar tsc

// No tsconfig = Inserindo o objeto exclude diz ao compilar TS para não gerar os aquivos JS dos arquivos TS informados la;
// com o nome do arquivo *nome.exprensao, diz para o compilador não compilar todos os arquivos com aquela terminação
// **/*.extensão, nao compila os arquivos da pasta 
// include = Inclui o arquivo para compilação