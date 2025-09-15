export const data = {
   banners: [
      { img: '/assets/banners/banner-1.png', link: '' },
      { img: '/assets/banners/banner-2.png', link: '' },
      { img: '/assets/banners/banner-3.png', link: '' },
      { img: '/assets/banners/banner-4.png', link: '' },
   ],

   products: [
      {
         id: 1,
         label: 'Camisa PHP',
         price: 49.90,
         image: '/assets/products/camiseta-php.png',
         liked: false
      },
      {
         id: 2,
         label: 'Camisa Laravel',
         price: 39.90,
         image: '/assets/products/camiseta-laravel-branca.png',
         liked: false
      },
      {
         id: 3,
         label: 'Camisa Node',
         price: 19.90,
         image: '/assets/products/camiseta-node.png',
         liked: false
      },
      {
         id: 4,
         label: 'Camisa React',
         price: 19.90,
         image: '/assets/products/camiseta-react-azul.png',
         liked: false
      }
   ],
   product: {
      id: 1,
      label: 'Camisa PHP',
      images: [
         '/assets/products/camiseta-php.png',
         '/assets/products/camiseta-laravel-branca.png'
      ],
      price: 19.90,
      liked: false,
      description: 'Uma camisa incrível para desenvolvedores PHP.'
   },
   addresses: [
      { id: 1, zipcode: '12345', street: 'Rua teste 01', number: '123', city: 'Cidade qualquer', state: 'Estado algum', country: 'País' },

      { id: 2, zipcode: '7890', street: 'Rua teste 02', number: '124', city: 'Cidade qualquer', state: 'Estado algum', country: 'País' },

      { id: 3, zipcode: '38210', street: 'Rua teste 03', number: '125', city: 'Cidade qualquer', state: 'Estado algum', country: 'País' },
   ]
}