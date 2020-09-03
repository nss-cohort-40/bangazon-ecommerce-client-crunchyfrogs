import React, { useState, useEffect } from "react"


const ProductDetails = props => {

    const [product, setProduct] = useState({})
    const [numProducts, setNumProducts] = useState(0)
    const [numOrders, setNumOrders] = useState(0)
    const [updatePage, setUpdatePage] = useState(false)

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
            setNumOrders(productOrders.length)
        })
    }

    const addToOrder = () => {
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
            console.log(order)
            if (order.length === 0) {
                fetch(`http://localhost:8000/orders`, {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                    }
                })
                .then(() => {
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
                        fetch(`http://localhost:8000/productorders`, {
                            "method": "POST",
                            "headers": {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                            },
                            "body": JSON.stringify({
                                product_id: product.id,
                                order_id: order[0].id
                            })
                        })
                        .then(() => setUpdatePage(!updatePage))
                    })
                })
            } else {
                fetch(`http://localhost:8000/productorders`, {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                    },
                    "body": JSON.stringify({
                        product_id: product.id,
                        order_id: order[0].id
                    })
                })
                .then(() => setUpdatePage(!updatePage))
            }
        })
    }

    useEffect(() => {
        getProduct()
        findQuantity()
    }, [updatePage])

    return (
        <div>
            {product.image_path ?
            <img src={product.image_path} style={{width:'300px'}}/>
            :
            <p></p>
            }
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price per unit: {product.price}</p>
            <p>Quantity available: {numProducts - numOrders}</p>
            {
            numProducts > numOrders &&
            <button onClick={addToOrder}>Add to Cart</button>
            }
        </div>
    )
}


export default ProductDetails