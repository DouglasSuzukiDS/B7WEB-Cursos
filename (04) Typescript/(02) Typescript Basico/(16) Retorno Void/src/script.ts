// (16) Retorno Void

function removerElemento(el: HTMLElement): void {
   if(el.classList) {
      return
   }

   el.remove()
}

removerElemento(document.getElementById('teste'))

type QualquerFuncao = () => void
const algo: QualquerFuncao = () => {
   return 'bla bla'
}

let retorno = algo()

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro