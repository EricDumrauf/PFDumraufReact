//import { SlBasket } from "react-icons/sl"
import cart from "../components/assets/icons8-cart-50.png"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget(){
    const { totalQuantity } = useContext ( CartContext )

    return(
        //<SlBasket/>
        <Link to='/cart' className="cartWidget" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className="cartImg" src={cart} alt='cart-widget'/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget;