import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import SearchBar from './SearchBar';
import './NavBar.css';
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import ProductCategories from '../productcategories/ProductCategories'

const NavBar = props => {

    const { isAuthenticated, logout } = useSimpleAuth()

    const handleLogout = () => {
        props.setIsCurrentUser(false)
        logout()
        props.setIsCurrentUser(true)
        props.history.push('/')
    }

    return (
        <nav>
            <ul className="nav_container">
                <div className="nav_leftside">
                    <li>
                        <Link className="nav_link" to="/">Home</Link>
                    </li>
                    {
                        isAuthenticated() ?
                            <>
                                <li>
                                    <Link className="nav_link" to="/products">My Products</Link>
                                </li>
                                <li>
                                    <Link className="nav_link" to="/">My Favorites</Link>
                                </li>
                                <li>
                                    <Link className="nav_link" to="/account">My Account</Link>
                                </li>
                                <li>
                                    <ProductCategories />
                                </li>
                            </>
                            :
                            <>

                            </>
                    }
                    <li>
                        <SearchBar />
                    </li>
                </div>
                <div className="nav_rightside">
                    {
                        isAuthenticated() ? <>
                            <li>
                                <Link className="nav_link" to="/">Cart</Link>
                            </li>
                            <li className="nav_link">
                                <button className="nav-link fakeLink"
                                    onClick={handleLogout}
                                >Logout</button>
                            </li> </> :
                            <>
                                <li>
                                    <Link className="nav_link" to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link className="nav_link" to="/register">Register</Link>
                                </li>
                            </>
                    }
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;