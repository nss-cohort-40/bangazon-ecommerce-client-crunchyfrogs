import React, { useState, useEffect } from 'react'
import ProductCard from '../product/ProductCard'
import PaymentOptions from '../Account/PaymentOptions'

const ShoppingCart = props => {

    const [products, setProducts] = useState([])
    const [showPaymentOptions, setShowPaymentOptions] = useState(false)

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
                fetch(`http://localhost:8000/productorders?order=${order[0].id}`, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                    }
                })
                .then(response => response.json())
                .then(response => setProducts(response.map(productorder => {
                    productorder.product.productOrderId = productorder.id
                    console.log(productorder.product)
                    productorder.product.id = productorder.product.url.slice(30)
                    return productorder.product
                })))
            }
        })

    }

    const togglePaymentOptions = e => {
        setShowPaymentOptions(!showPaymentOptions)
    }

    useEffect(() => {        
        getCart()
    }, [])

    return (
        showPaymentOptions ?
        <PaymentOptions paymentOptions={props.paymentOptions} cart={true} {...props} />
        :
        <div>
            {products.map(product => <ProductCard key={product.productOrderId} product={product} {...props} />)}
            <button onClick={togglePaymentOptions}>Complete Order</button>
        </div>

    )
}


export default ShoppingCart