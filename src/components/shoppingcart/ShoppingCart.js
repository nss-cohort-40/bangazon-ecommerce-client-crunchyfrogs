import React, { useState, useEffect } from 'react'
import ProductCard from '../product/ProductCard'


const ShoppingCart = props => {

    const [products, setProducts] = useState([])


    const getCart = () => {

        fetch(`http://localhost:8000/orders?paymenttype=true`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then(order => {
            if (order.length === 0) {
                fetch(`http://localhost:8000/orders`, {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                    }
                }).then(() => getCart())
            } else {
                console.log(order.id)
                fetch(`http://localhost:8000/productorders`, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                    }
                })
                .then(response => response.json())
                .then(response => console.log(response))
            }
        })

    }

    useEffect(() => {        
        getCart()
    }, [])

    return (
        <div>
            {products.map(product => <ProductCard product={product} {...props} />)}
        </div>
    )
}


export default ShoppingCart