import React from 'react'

const OrderProductDetails = props => {

    const goToProductDetails = e => {
        const productId = props.orderProduct.product.url.match(/(?<=\/product\/)\d+/g)[0]
        props.history.push(`/products/${productId}`)
    }

    return (
        <div className="orderproduct_details" onClick={goToProductDetails}>
            <p>Product: {props.orderProduct.product.title}</p>
            <p>Description: {props.orderProduct.product.description}</p>
        </div>
    )
}

export default OrderProductDetails