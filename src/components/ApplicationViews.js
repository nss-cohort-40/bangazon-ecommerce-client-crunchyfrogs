import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";
import Account from './Account/Account';
import AccountForm from './Account/AccountForm';


const ApplicationViews = () => {
    const [customer, setCustomer] = useState({})

    const getCustomer = () => {
        fetch("http://localhost:8000/customer", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
            .then(response => response.json())
            .then((customer) => {
                console.log(customer)
            })
    }

    useEffect(() => {
        getCustomer()
    }, [])

    return (
        <>
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
                exact path="/account" render={props => {
                    return <Account customer={customer} {...props}/>
                }}
            />
            <Route
                path="/account/edit" render={props => {
                    return <AccountForm customer={customer} setCustomer={setCustomer} {...props}/>
                }}
            />
        </>
    )
}


export default ApplicationViews