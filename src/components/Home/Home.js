import React, { useState, useEffect } from 'react';
import ProductCard from '../product/ProductCard';

const Home = props => {
    let customer = props.customer
    const [recentProducts, setRecentProducts] = useState([])

    const getProducts = () => {
            fetch("http://localhost:8000/product?limit=20&sort=-id", {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    // "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
                .then(response => response.json())
                .then(setRecentProducts)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="home_recent_products">
            {recentProducts.map(product => <ProductCard key={product.id} product={product} customer={customer} />)}
        </div>
    )
}

export default Home