// (08) Classes - Herança

class Person {
   static hands = 2 // Faz parte da Classe e nao da instancia
   age = 0

   constructor(name) {
      this.name = name
   }

   sayHi() {
      console.log(`Olá, meu nome é ${this.name} e possuo ${Person.hands} mãos`)
   }
}

let p1 = new Person('Nick')
p1.sayHi()