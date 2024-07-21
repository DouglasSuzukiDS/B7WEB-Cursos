// (07) Classes - Variável  / Método Estático
class Person {
   age = 0

   constructor(name) {
      this.name = name
   }

   sayHi() {
      console.log(`${ this.name } diz Oi`)
   }
}

class Student extends Person {
   constructor(name, id) {
      super(name) // Chama o constructure da classe que foi herdada
      this.id = id
   }

   /*sayHi() { // Sobreescreve a função sayHi que foi herdada
      console.log(`${ this.name } é um estudante e diz Oi`)
   }*/

   sayHello() {
      super.sayHi()
   }
}

let p1 = new Student('Nick', 123)
p1.age = 20
p1.sayHi()
p1.sayHello()
console.log(`${ p1.name } tem ${ p1.age } anos e a matrícula é ${ p1.id }`)