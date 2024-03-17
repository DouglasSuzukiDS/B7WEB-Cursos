import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Titulo } from './styled';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { api } from '../../api';

export default () => {
    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('')

    useEffect(() => {
        const getCategories = async() => {
            const categories = await api.getCategories()
            console.log(categories)
        }

        getCategories()
    }, [])

    return (
        <Container>
            <Header search={ headerSearch } onSearch={ setHeaderSearch } />
        </Container>
    );
}