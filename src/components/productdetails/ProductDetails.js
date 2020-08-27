import React, { useState, useEffect } from "react"


const ProductDetails = props => {

    const [product, setProduct] = useState({})
    const [numProducts, setNumProducts] = useState(0)
    const [numOrders, setNumOrders] = useState(0)

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
            // console.log(products)
            setProduct(products)
            setNumProducts(products.quantity)
        })
    }

    const findQuantity = () => {
        fetch(`http://localhost:8000/productorders?product=${props.productId}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then(productOrders => {
            console.log(productOrders)
            setNumOrders(productOrders.length)
        })
    }

    useEffect(() => {
        getProduct()
        findQuantity()
    }, [])

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price per unit: {product.price}</p>
            <p>Quantity available: {numProducts - numOrders}</p>
            {
            numProducts > numOrders &&
            <button>Add to Cart</button>
            }
        </div>
    )
}


export default ProductDetails