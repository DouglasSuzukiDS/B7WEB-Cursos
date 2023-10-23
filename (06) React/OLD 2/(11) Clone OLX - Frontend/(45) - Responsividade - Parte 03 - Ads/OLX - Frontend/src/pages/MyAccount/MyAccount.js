import { Main } from './styled'

export const MyAccount = () => {
   return(
      <Main>
         My Account
      </Main>
   )
}

/*
   GET /user/me (token)

   PUT /user/me (token, name, email, state, password)

   POST /add/<id> (token, status, title, category, price, priceNegotiable, description. images, img[])
*/