import React, { useState, useEffect } from "react"


const ProductBox = props => {
    // Curently just a list item, later may be transformed in a box
    let product = props.product

    return <>
        <li>{product.title}</li>
    </>
}

export default ProductBox