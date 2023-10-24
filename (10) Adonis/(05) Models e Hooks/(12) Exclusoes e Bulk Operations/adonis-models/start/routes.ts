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

Route.get('/', async () => {

  let user = await User.find(4)

  /*if(user) {
    user.delete()
  }
  
  return 'Usuário deletado com sucesso'*/

  let users = await User.all()

  users.map(user => {
    user.delete()
  })

  return 'Usuários deletados com sucesso'

  // await User.query().where('id', '>', 1).delete() // FOrma não recomendada
})
