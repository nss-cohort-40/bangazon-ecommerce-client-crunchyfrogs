import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom"


import React from 'react';
import Login from "./auth/Login"
import Register from "./auth/Register"
import ProductCategories from './productcategories/ProductCategories'
import SearchResults from "./Search/SearchResults"



const ApplicationViews = () => {
    return (<>
        <Route
            exact path="/register" render={props => {
                return <Register />
            }}
        />
        <Route
            exact path="/login" render={props => {
                return <Login {...props} />
            }}
        />
        <Route
            exact path="/product/:searchword" render={props => {
                console.log("Application Views")
                return <SearchResults searchword={props.match.params.searchword} {...props} />
            }}
        />
    </>)
}


export default ApplicationViews