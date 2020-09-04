import React, { useState, useEffect } from 'react';
import ProductCard from '../product/ProductCard';

const Home = props => {
    let customer = props.customer
    let listProducts = props.listProducts
    let getProducts = props.getProducts

    useEffect(() => {getProducts()}, [])

    return (
        <div className="home_recent_products">
            {listProducts.map(product => <ProductCard key={product.id} product={product} customer={customer} getProducts={getProducts} />)}
        </div>
    )
}

export default Home