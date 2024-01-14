import ProfileCard from "./components/ProfileCard";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "bulma/css/bulma.css";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Error from "./components/Error";
import "./App.css"
import Cart from './components/Cart'
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout";

function App(){
    return(
        <div>  
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="*" element={<Error/>} /> 
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;