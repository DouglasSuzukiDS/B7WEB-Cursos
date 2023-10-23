"use strict";
// (02) Criando o Arquivo tsconfig.json
// const nome: string = 'Shanks'
function blabla(n1) {
    return 'O parametro era: ' + n1;
}
blabla(2);
// tsc NomeArquivo.ts = Compila e converte o arquivo
// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta
// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro
// tsc src/script.ts -w = monitora as modificações
// tsc --init = Gera o arquivo tsconfig.json
// gerado o tsconfig, para gerar o arquivo .js basta digitrar tsc
