import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd})=>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity >1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Counter'>
            <div className='controls'>
                <button className='button is-black' onClick={decrement}>-</button>
                <span className='num'>{quantity}</span>
                <button className='button is-black' onClick={increment}>+</button>
            </div>
            <div className='has-text-centered p-5'>
                <button className='button is-black' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
        
    )
}

export default ItemCount