import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom"
import React from 'react';


// import 
import Login from "./auth/Login"
import Register from "./auth/Register"
import PaymentType from './paymenttype/AddPaymentType'

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
            exact path="/payment_type" render={props => {
                return <PaymentType />
            }}
        />
    </>)
}


export default ApplicationViews