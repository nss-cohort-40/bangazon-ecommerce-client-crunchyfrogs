import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom"
import React from 'react';
import Login from "./auth/Login"
import Register from "./auth/Register"
import ProductCategories from './productcategories/ProductCategories'


const ApplicationViews = () => {
    return (<>
        <Route
            exact path="/register" render={props => {
                return <Register />
            }}
        />
        <Route
            exact path="/login" render={props => {
                return <Login />
            }}
        />
        <Route
            exact path="/product_categories" render={props => {
                return <ProductCategories />
            }}
        />
    </>)
}


export default ApplicationViews