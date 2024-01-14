import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext";

const ItemDetail = ({id, name, img, price, marca, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return(
        <article className="card"> 
            <header className="header">
                <h2 className="itemheader">
                    {name}
                </h2>
            </header>
            <picture className="image is-1by1">
                <img src={img} alt={name}/>
            </picture>
            <section>
                <div className="card-content">
                    <div className="media-content">
                        <h2 className="title is-4">{marca}</h2>
                        <h3 className="subtitle is-4">{name}</h3>
                        <p className="subtitle is-4">
                            ${price}
                        </p>
                        <p className="subtitle is-4">
                            Stock Disponnible: {stock}
                        </p>
                    </div>
                </div>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="option">Finalizar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail