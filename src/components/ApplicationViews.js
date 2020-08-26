import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom"
import React from 'react';
import Login from "./auth/Login"
import Register from "./auth/Register"
import ProductDetails from './productdetails/ProductDetails';
import ProductForm from "./product/ProductForm"
import ProductList from './product/ProductList'


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
            exact path="/products" render={props => {
                return <ProductList {...props} />
            }}
        />
        <Route
            exact path="/addproduct" render={props => {
                return <ProductForm {...props} />
            }}
        />
        <Route
            exact path="/products/:productId(\d+)" render={props => {
                return <ProductDetails productId={parseInt(props.match.params.productId)} {...props}/>
            }}
        />
    </>)
}


export default ApplicationViews