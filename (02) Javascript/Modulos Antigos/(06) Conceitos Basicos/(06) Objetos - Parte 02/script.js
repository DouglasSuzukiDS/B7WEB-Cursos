/*let carros = [ 
   'Palio', 
   'Uno', 
   'Corolla', 
   'Ferrari' 
]

let carro = {
   nome: 'Fiat',
   modelo: 'Uno',
   peso: '800kg',
   ligado: false,
   ligar: function() {
      // console.log('Ligando o ' + this.modelo)
      this.ligado = true
      console.log('Vrum Vrum')
   },
   acelerar: function() {
      if(this.ligado == true) {
         console.log('Acelerando')
      } else {
         console.log(this.nome + ' ' + this.modelo + ' ' + 'não está ligado')
      }
   }
}

console.log('Modelo: ' + carro.modelo)

carro.ligar()
carro.acelerar()*/

let carros = [
   {nome: 'Fiat', modelo: 'Palio'},
   {nome: 'Fiat', modelo: 'Uno'},
   {nome: 'Toyota', modelo: 'Corolla'},
   {nome: 'Ferrari', modelo: 'Spider'},
]

console.log(carros)
console.log(carros[2])
console.log(carros[2].modelo)