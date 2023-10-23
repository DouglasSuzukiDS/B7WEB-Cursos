import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
   Route.get('/admin/', 'PainelController.admin')

   Route.group(() => { // Aqui a rota já tera o '/painel/

      Route.get('/', 'PainelController.index')
      Route.get('/usuarios', 'PainelController.usuarios')
      Route.get('/usuario/:id', 'PainelController.usuario')

   }).prefix('/painel/') 

   // Route.get('/painel/', 'PainelController.index')
   // Route.get('/painel/usuarios', 'PainelController.usuarios')

}).prefix('/api') // deixa a rota assim => http://localhost:3333/api/painel/usuarios
