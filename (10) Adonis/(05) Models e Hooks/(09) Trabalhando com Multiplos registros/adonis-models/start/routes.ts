/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

// Dados de um formulario
let _json = { name: 'Tonhao', password: '123456', age: 45 }

let _json2 = [
  { name: 'Tonhao', password: '123456', age: 45 },
  { name: 'Tonhinho', password: '123456', age: 35 },
]

Route.get('/', async () => {
  /*const user = new User()

  user.fill(_json) // Preenche com os dados informados

  await user.save()*/

  // const user = await new User().fill(_json).save()
  
  /*const user = await User.create({
    name: 'Big Mom',
    password: '123456',
    age: 50
  })*/

  // const user = await User.create(_json)

  const user = await User.createMany(_json2)

  return {
    objeto: user,
    // persistido: user.$isPersisted
    persistido: user[0].$isPersisted // Verificar para cada dado fdo array
  }
})
