// (09) Classes - Factory
class Person {
   static hands = 2 // Faz parte da Classe e nao da instancia
   age = 0

   constructor(name) {
      this.name = name
   }
}

// Factory => É o retorna da instância. Igual uma fabrica de carro, o objetivo e fabricar e enviar o carro pra venda
function createPerson(name, age) {
   let p = new Person(name)
   p.age = age
   return p
}

p1 = createPerson('Nick', 20)
console.log(`${ p1.name } possui ${ p1.age }`)