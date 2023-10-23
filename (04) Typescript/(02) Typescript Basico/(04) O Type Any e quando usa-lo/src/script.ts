// (04) O Type Any e quando usa-lo

let nomes: any = ['Kaido', 'BigMon', 'Shanks', 'Kurohige']

nomes.push(15)

let coisas: any = ['Kaido', 60, 'JoyBoy']

coisas.push(true)

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro