"use strict";
// (01) Usando o WatchMode no Arquivo
const nome = 'Shanks';
function blabla(n1) {
    return 'O parametro era: ' + n1;
}
blabla(2);
// tsc NomeArquivo.ts = Compila e converte o arquivo
// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta
// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro
// tsc src/script.ts -w = monitora as modificações
