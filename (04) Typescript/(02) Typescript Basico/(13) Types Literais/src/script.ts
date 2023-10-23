// (13) Types Literais => Seria como ter apenas aqueles valores para serem usados

/*function mostrarTexto(
   texto: string, 
   alinhamento: 'left' | 'right' | 'center') {
      return `<div style='text-align: ${alinhamento}'>${texto}`
}

mostrarTexto('Shanks', 'left')
mostrarTexto('Shanks', 'right')
mostrarTexto('Shanks', 'aa') // Gera o erro pois nao e valor esperado */

type VerdadeiroOuFalse = true | false
// function temNome(nome: string): true | false {
function temNome(nome: string): VerdadeiroOuFalse {
   if(nome !== '') {
      return true
   } else {
      return false
   }
}

type Opcoes = {
   width: number,
   height: number
}
// function configurar(props: {width: number, height: number} | 'auto') {
function configurar(props: Opcoes | 'auto') {

}
configurar({width: 100, height: 200})
configurar('auto')
// configurar('automatico') // Ira gerar erro por nao ter um valor esperado

// tsc NomeArquivo.ts = Compila e converte o arquivo

// tsc src/script.ts --outDir public = Para compilar o arquivo na pasta correta

// tsc src/script.ts --noEmitOnError = Não gera oarquivo caso houver erro