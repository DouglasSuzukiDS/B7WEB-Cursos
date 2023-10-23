import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
   Route.get('/admin/', 'PainelController.admin')

   Route.group(() => { // Aqui a rota já tera o '/painel/

      Route.get('/', 'PainelController.index')

      // Pode se filtrar os parametros com Regex
      // Route.get('/usuario/:id', 'PainelController.usuarioById').where('id', /^[0-9]+$/) // Tem que ser numero de 0 - 9

      // Route.get('/usuario/:slug', 'PainelController.usuarioBySlug').where('slug', /^[a-z_-]+$/) // Caso for um texto entra nessa rota

      Route.get('/usuario/:id?', 'PainelController.usuarioById')
         .where('id', Route.matchers.number()) // Tem que ser numero de 0 - 9 - Aqui se torna Parametro Opcional

      Route.get('/usuario/:slug', 'PainelController.usuarioBySlug') 
         .where('slug', Route.matchers.slug()) // Caso for um texto entra nessa rota
      
      Route.get('/docs/*', 'PainelController.docs')
         // http://localhost:3333/api/painel/docs/blabla


   }).prefix('/painel/') 

   // Route.get('/painel/', 'PainelController.index')
   // Route.get('/painel/usuarios', 'PainelController.usuarios')

}).prefix('/api') // deixa a rota assim => http://localhost:3333/api/painel/usuarios
