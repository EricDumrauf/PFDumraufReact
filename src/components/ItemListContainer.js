import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../assyncMock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div>
            <h1 className="title has-text-centered">{greeting}</h1>
            <ItemList products={products} categoryId={categoryId} />
        </div>
    )
}

export default ItemListContainer;