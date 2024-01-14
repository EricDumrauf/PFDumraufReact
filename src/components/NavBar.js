import CartWidget from "./CartWidget";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="hero is-black p-1">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <h1 className="title">ED PERFUMERIE</h1>
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar-item-container" className="navbar-menu">
                    <div className="navbar-start">
                        <li className="navbar-item">
                            <Link to='/'>Home</Link>
                        </li>

                        <li className="navbar-item">
                            <NavLink to={`/category/perfumes-masculinos`}>Perfumes Masculinos</NavLink>
                        </li>

                        <li className="navbar-item">
                            <NavLink to={`/category/perfumes-femeninos`}>Perfumes Femeninos</NavLink>
                        </li>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-white">
                                    <CartWidget/>
                                    <span className="cart-badge">3</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;