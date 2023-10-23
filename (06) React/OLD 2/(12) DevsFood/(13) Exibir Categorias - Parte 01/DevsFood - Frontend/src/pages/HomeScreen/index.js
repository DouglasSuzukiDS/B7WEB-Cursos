import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { CategoryArea, CategoryList, Container, Titulo } from './styled';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { api } from '../../api';
import { CategoryItem } from '../../components/CategoryItem';

export const HomeScreen = () => {
    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async() => {
            const cat = await api.getCategories()
            console.log(cat)

            if(cat.error === '') {
                setCategories(cat.result)
            }
        }

        getCategories()
    }, [])

    return (
        <Container>
            <Header search={ headerSearch } onSearch={ setHeaderSearch } />

            { categories.length > 0 && 
                <CategoryArea>
                    Selecione uma categoria

                    <CategoryList>
                        <CategoryItem title='Todas as Categorias' image='/assets/food-and-restaurant.png' />
                    </CategoryList>
                </CategoryArea>
            }
        </Container>
    );
}