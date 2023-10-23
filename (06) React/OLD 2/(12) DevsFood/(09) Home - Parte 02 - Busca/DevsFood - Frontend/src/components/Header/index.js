import React from 'react';
import { Container, Logo, SearchInput } from './styled';
import { useState } from 'react';

export const Header = () => {
   const [inputActive, setInputActive] = useState(false)
   const handleInputFocus = () => {
      setInputActive(true)
   }

   const handleInputBlur = () => {
      setInputActive(false)
   }

   return(
      <Container>
        <Logo src='/assets/logo.png' />
        <SearchInput 
            type='text' 
            placeholder='Digite um produto ...'
            active={ inputActive }
            onFocus={ handleInputFocus }
            onBlur={ handleInputBlur } 
         />
      </Container>
   )
}