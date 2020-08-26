import React, { useRef, useState } from "react"


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
        .then(products => setProduct(products))
    }

    return (
        <div>

        </div>
    )
}


export default ProductDetails