import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Titulo } from './styled';
import { Header } from '../../components/Header';

export default () => {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    return (
        <Container>
            <Header />
        </Container>
    );
}