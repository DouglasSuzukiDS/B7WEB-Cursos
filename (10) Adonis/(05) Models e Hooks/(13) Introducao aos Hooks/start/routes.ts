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

  /*
    - Hooks => Ganchos

    - Funcao gravar_os_dados_na_tabela_views_produto()

    - Varias rotas que buscam informações de produtos
      - Quando exibir um produtos, gravar os dados na tabela views_produto

    - Rota de cadastro de produtos no ecommerce
      - Quando cadastrar um produto, gravar os dados na tabela relatorios

    - Rota de exclusao de produto no ecommerce
      - Quando deletar um produto, nos salvamos os dados em uma tabela historica
  */
  
})
