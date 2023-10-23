export default class HomeController {
   async index({view}) {
      // return view.render('Homepage')
      return view.render('painel/Homepage')
   }

   async sobre() {
      return 'Sobre nós'
   }
}
