import React, { useState, useEffect } from "react"


const ProductDetails = props => {

    const [product, setProduct] = useState({})

    const getProduct = () => {
        fetch(`http://localhost:8000/product/${props.productId}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then(products => {
            console.log(products)
            setProduct(products)
        })
    }

    useEffect(() => {
        getProduct()
        console.log(product)
    }, [])

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price per unit: {product.price}</p>
            <p>Quantity available: {product.quantity}</p>
            <button>Add to Cart</button>
        </div>
    )
}


export default ProductDetails