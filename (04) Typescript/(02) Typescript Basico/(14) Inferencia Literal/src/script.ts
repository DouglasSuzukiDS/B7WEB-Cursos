// (14) Inferencia Literal => Seria uma forma de restringir apenas certos valores definidos

function fazerRequisicao(url: string, method: 'GET' | 'POST') {
   // ****
}

//let req = { url: 'https://google.com.br', method: 'GET' }
//fazerRequisicao(req.url, req.method)

type Methods = 'GET' | 'POST'
let url = 'https://google.com.br'
let method: Methods = 'GET' 
fazerRequisicao(url, method)


type RequestDetails = {
   url: string,
   method: 'GET' | 'POST'
}
let req: RequestDetails = { 
   url: 'https://google.com.br', 
   method: 'GET' 
}
fazerRequisicao(req.url, req.method)

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro