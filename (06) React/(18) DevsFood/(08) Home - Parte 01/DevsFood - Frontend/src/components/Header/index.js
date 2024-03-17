import React from 'react';
import { Container, Logo, SearchInput } from './styled';

export const Header = () => {
   return(
      <Container>
        <Logo src='/assets/logo.png' />
        <SearchInput type='text' placeholder='Digite um produto ...' />
      </Container>
   )
}