// (18) Funcional - Factory
let person = {
   name: 'Nick',
   lastName: 'Diatlov',
   age: 20,
   getFullName() {
      return `${this.name} ${this.lastName}`
   }
}

console.log(person.getFullName())