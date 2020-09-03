import React, { useState, useEffect } from 'react'
import OrderProductDetails from './OrderProductDetails'

const OrderDetailsCard = props => {
    const [orderProducts, setOrderProducts] = useState([])
    const [orderTotal, setOrderTotal] = useState()

    const getOrderProducts = () => {
        return fetch(`http://localhost:8000/productorders?order=${props.orderId}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
            .then(response => response.json())
            .then(setOrderProducts)
    }

    const goHome = e => {
        props.history.push('/')
    }

    const goToAccount = e => {
        props.history.push('/account')
    }

    useEffect(() => {
        let total = 0
        orderProducts.forEach(orderProduct => {
            total += parseFloat(orderProduct.product.price)
        })
        setOrderTotal(total)
    }, [orderProducts])

    useEffect(() => {
        getOrderProducts()
    }, [])

    return (
        <div className="order_details">
            <h3>Order #{props.orderId}</h3>
            {orderProducts
            ?
            orderProducts.map(orderProduct => <OrderProductDetails orderProduct={orderProduct} key={`orderproduct_details_${orderProduct.id}`} {...props} />)
            :
            null}
            <p>Order Total: ${orderTotal}</p>
            <button onClick={goToAccount}>Back to Account</button>
            <button onClick={goHome}>Home</button>
        </div>
    )
}

export default OrderDetailsCard