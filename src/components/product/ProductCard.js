import React from 'react'

const ProductCard = (props) => {
    return (
        <>
            <h3>{props.product.title}</h3>
            <p>{props.product.price}</p>
            <p>{props.product.description}</p>
            <p>{props.product.quantity}</p>
            <p>{props.product.location}</p>
        </>
    )
}

export default ProductCard