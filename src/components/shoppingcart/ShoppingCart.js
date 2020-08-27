import React, { useState, useEffect } from 'react'
import ProductCard from '../product/ProductCard'


const ShoppingCart = props => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        
        fetch(`http://localhost:8000/orders`, {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then(order => {
            if (order.length === 0) {
                console.log("wow")
            }
        })

    }, [])

    return (
        <div>
            {products.map(product => <ProductCard product={product} {...props} />)}
        </div>
    )
}


export default ShoppingCart