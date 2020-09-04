import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Home/Home";
import ProductList from './product/ProductList';
import ProductForm from "./product/ProductForm";
import Account from './Account/Account';
import AccountForm from './Account/AccountForm';
import ProductByCategory from './product/ProductByCategory';
import ProductDetails from './productdetails/ProductDetails';
import SearchResults from "./Search/SearchResults"
import ShoppingCart from './shoppingcart/ShoppingCart';
import Confirmation from './Confirmation/Confirmation';
import OrderDetailsCard from './Order/OrderDetailsCard';

const ApplicationViews = props => {
    const [customer, setCustomer] = useState({user: {}})
    const [paymentOptions, setPaymentOptions] = useState([])
    const [ listProducts, setListProduct ] = useState([])

    const isLoged = props.isLoged
    const propStorage = props

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
                setCustomer(customer[0])
            })
    }

    const getPayments = () => {
        if (customer) {
            fetch(`http://localhost:8000/paymenttype?customer=${customer.id}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
            .then(response => response.json())
            .then(data => setPaymentOptions(data))
        }
    }

    const getProducts = () => {
        return fetch("http://localhost:8000/product?limit=20&sort=-id", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                // "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
            .then(response => response.json())
            .then(data => setListProduct(data))
    }

    useEffect(() => {
        getCustomer()
    }, [props.isCurrentUser])

    useEffect(() => {
        getPayments()
    }, [customer])

    useEffect(()=>{
        getProducts()
    }, [])

    return (
        <>
            <Route
                exact path="/" render={props => {
                    return <Home {...props} customer={customer} getProducts={getProducts} listProducts={listProducts}/>
                }}
            />
            <Route
                exact path="/register" render={props => {
                    return <Register setIsCurrentUser={propStorage.setIsCurrentUser} />
                }}
            />
            <Route
                exact path="/login" render={props => {
                    return <Login setIsCurrentUser={propStorage.setIsCurrentUser} {...props} />
                }}
            />
            <Route
                exact path="/products" render={props => {
                    return <ProductList listProducts={listProducts} {...props} />
                }}
            />
            <Route
                exact path="/cart" render={props => {
                    return <ShoppingCart paymentOptions={paymentOptions} customer={customer} {...props} />
                }}
            />
            <Route
                exact path="/products/:productId(\d+)" render={props => {
                    if (!isLoged()){
                       return  <Redirect to="/login" />
                    }
                    return <ProductDetails productId={parseInt(props.match.params.productId)} {...props} />
                }}
            />
            <Route
                exact path="/products/categories/:categoryId(\d+)" render={props => {
                    return <ProductByCategory categoryId={parseInt(props.match.params.categoryId)} {...props} />
                }}
            />
            <Route
                exact path="/addproduct" render={props => {
                    return <ProductForm {...props} />
                }}
            />
            <Route
                exact path="/account" render={props => {
                    return <Account customer={customer} getPayments={getPayments} paymentOptions={paymentOptions} {...props} />
                }}
            />
            <Route
                exact path="/account/edit" render={props => {
                    return <AccountForm customer={customer} getCustomer={getCustomer} setCustomer={setCustomer} {...props} />
                }}
            />
            <Route
            exact path="/product/:searchword" render={props => {
                return <SearchResults searchword={props.match.params.searchword} {...props} />
            }}
            />
            <Route
                exact path="/confirmation" render={props => {
                    return <Confirmation customer={customer} {...props} />
            }}
            />
            <Route
                exact path="/orders/:orderId(\d+)" render={props => {
                    return <OrderDetailsCard orderId={parseInt(props.match.params.orderId)} {...props} />
                }}
            />
        </>
    )
}

export default ApplicationViews