import React from 'react';
import { Link, Router } from 'react-router-dom';
import SearchBar from './SearchBar';
import './NavBar.css';

const NavBar = props => {
    return (
        <nav>
            <ul className="nav_container">
                <div className="nav_leftside">
                    <li>
                        <Link className="nav_link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav_link" to="/">My Products</Link>
                    </li>
                    <li>
                        <Link className="nav_link" to="/">My Favorites</Link>
                    </li>
                    <li>
                        <Link className="nav_link" to="/account">My Account</Link>
                    </li>
                    <li>
                        <SearchBar />
                    </li>
                </div>
                <div className="nav_rightside">
                    <li>
                        <Link className="nav_link" to="/">Cart</Link>
                    </li>
                    <li>
                        <Link className="nav_link" to="/register">Register</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;