// (19) Funcional -Instância e This

function createPerson(name, lastName, age) {
   return {
      name, lastName, age
   }
}

let person1 = createPerson('Nick', 'Diatlov', 20)

console.log(person1)