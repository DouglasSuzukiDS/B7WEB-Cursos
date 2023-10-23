import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { CategoryArea, CategoryList, Container, ProductArea, ProductItem, Titulo } from './styled';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { api } from '../../api';
import { CategoryItem } from '../../components/CategoryItem';

export const HomeScreen = () => {
    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('')
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    const [activeCategory, setActiveCategory] = useState(0)

    const getProducts = async() => {
        const prods = await api.getProducts()

        if(prods.error === '') {
            setProducts(prods.result.data)
        }
    }

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

    useEffect(() => {
        getProducts()
    }, [activeCategory])

    return (
        <Container>
            <Header search={ headerSearch } onSearch={ setHeaderSearch } />

            { categories.length > 0 && 
                <CategoryArea>
                    Selecione uma categoria

                    <CategoryList>
                        <CategoryItem
                            data={{ 
                                id: 0, 
                                title:'Todas as Categorias',
                                image:'/assets/food-and-restaurant.png' 
                            }} 
                            activeCategory={ activeCategory }
                            setActiveCategory={ setActiveCategory }
                         />

                        { categories.map((item, index) => (
                            <CategoryItem 
                                key={ index } data={ item }
                                activeCategory={ activeCategory } 
                                setActiveCategory={ setActiveCategory } />
                            ))
                        }
                    </CategoryList>
                </CategoryArea>
            }

            { products.length > 0 && 
                <ProductArea>
                    <ProductItem>
                        {   products.map((item, index) => (
                                <ProductItem 
                                    key={ index }
                                    data={ item }
                                />
                            ))
                        }
                    </ProductItem>
                </ProductArea>
            }

        </Container>
    );
}