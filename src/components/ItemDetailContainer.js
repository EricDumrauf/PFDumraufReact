import { useState, useEffect } from 'react';
import { getProductById } from '../assyncMock';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className="container mt-2 p-5">
            <div className="columns is-centered">
                <div className="column is-5">
                    <ItemDetail {...product}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer