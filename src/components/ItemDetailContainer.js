import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id:  response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
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