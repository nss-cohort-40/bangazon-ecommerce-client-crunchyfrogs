import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import SearchBar from './SearchBar';
import './NavBar.css';
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const NavBar = props => {

    const { isAuthenticated, logout } = useSimpleAuth()

    const handleLogout = () => {
        logout()
        return <Redirect to="/" />
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
                                    <Link className="nav_link" to="/">My Products</Link>
                                </li>
                                <li>
                                    <Link className="nav_link" to="/">My Favorites</Link>
                                </li>
                                <li>
                                    <Link className="nav_link" to="/account">My Account</Link>
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
                                onClick={() => {
                                    logout()
                                    props.history.push({
                                        pathname: "/"
                                    })
                                }
                                }
                                >Logout</button>
                            </li> </>:
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