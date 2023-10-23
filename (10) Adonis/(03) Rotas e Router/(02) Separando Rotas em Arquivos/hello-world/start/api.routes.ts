import Route from '@ioc:Adonis/Core/Route'

Route.get('/painel/', 'PainelController.index')
Route.get('/painel/usuarios', 'PainelController.usuarios')