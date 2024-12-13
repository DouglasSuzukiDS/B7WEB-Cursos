import { CartArea, CartBody, CartHeader, CartIcon, CartText } from "./styled"

export const Cart = () => {
   return(
      <CartArea>
         <CartHeader>
            <CartIcon src="/assets/cart.png" />

            <CartText>Meu Carrinho (X)</CartText>
         </CartHeader>

         <CartBody>

         </CartBody>
      </CartArea>
   )
}