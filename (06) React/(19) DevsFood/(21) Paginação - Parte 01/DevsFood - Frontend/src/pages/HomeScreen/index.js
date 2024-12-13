import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { CategoryArea, CategoryList, Container, ProductPaginationArea, ProductArea, ProductList, ProductPaginationItem } from './styled';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { api } from '../../api';
import { CategoryItem } from '../../components/CategoryItem';
import { ProductItem } from '../../components/ProductItem';

export const HomeScreen = () => {
    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('')
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const [activeCategory, setActiveCategory] = useState(0)
    const [activePage, setActivePage] = useState(0)

    const getProducts = async() => {
        const prods = await api.getProducts()

        if(prods.error === '') {
            setProducts(prods.result.data)
            setTotalPages(prods.result.pages)
            setActivePage(prods.result.page)
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
                    <ProductList>
                        {   products.map((item, index) => (
                                <ProductItem 
                                    key={ index }
                                    data={ item }
                                />
                            ))
                        }
                    </ProductList>
                </ProductArea>
            }

            { totalPages > 0 &&
                <ProductPaginationArea>
                    { 
                        Array(totalPages).fill(0).map((item, index) => (
                            <ProductPaginationItem key={ index }>
                                { index + 1 }
                            </ProductPaginationItem>
                        ))
                    }
                </ProductPaginationArea>
            }

        </Container>
    );
}