let nome = 'Charllote BigMom Linlin'

// let resultado = nome.length
//let resultado = nome.indexOf(' ') // Posição do 1 termo do Elemento, se não conter o elemento ele retorna -1 

//let resultado = nome.slice(10, 20) // Pega um pedaço da string e retorna, 1) Pos Inicial 2) Pos Final. Caso For passado só 1 número ele epega dessa posição ate o final. Se o numero for negatido, ele começa do final

//let resultado = nome.substring() // Funciona como o slice só que nao aceita numeros negativos

let resultado = nome.substr(0, 10) // Retorna o elemento apartir do 1 Paramentro, com a quantidade do 2 Parametro. Aceita numeros negaticos 

console.log(resultado)