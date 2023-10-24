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

  let users = await User.all()
  let user = await User.first()
  let userId = await User.find(3)
  let userName = await User.findBy('name', 'Nick')
  let usersByAge = await User.query().where('age', 30)
  let userByAge = await User.query().where('age', 30).first()
  
  return userByAge
})
