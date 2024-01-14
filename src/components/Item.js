import { Link } from "react-router-dom"


const Item = ({id, name, img, price, marca, stock}) => {

    return(
        <article className="card">
            <picture className="image is-1by1">
                <img src={img} alt={name}/>
            </picture>
            <div className="card-content">
                <div className="media-content">
                    <h2 className="title is-6">{marca}</h2>
                    <h3 className="subtitle is-5">{name}</h3>
                    <p className="subtitle is-5">
                        ${price}
                    </p>
                    <p className="subtitle is-6">
                        Stock Disponnible: {stock}
                    </p>
                    <div className="has-text-centered">
                        <Link to={`/item/${id}`} className="button is-black">Ver Producto</Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Item