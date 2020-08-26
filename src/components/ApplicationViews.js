import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom"
import React from 'react';
import Login from "./auth/Login"
import Register from "./auth/Register"
import ProductForm from "./product/ProductForm"


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
            exact path="/addproduct" render={props => {
                return <ProductForm />
            }}
        />
    </>)
}


export default ApplicationViews