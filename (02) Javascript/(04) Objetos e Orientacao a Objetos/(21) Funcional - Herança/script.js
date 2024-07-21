// (21) Funcional - Herança

const defaultUser = {
   name: '',
   email: '',
   level: 1
}

let user1 = {
   ...defaultUser,
   name: 'Nick',
   email: 'email@email.com'
}

let adm1 = {
   ...defaultUser,
   name: 'Admin1',
   email: 'admin1@email.com',
   level: 2
}

console.log(user1)
console.log(adm1)