import React, { useState, useEffect } from 'react'
import Api from '../../api/module'

import ProductCard from './ProductCard'

const ProductList = props => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        Api.getProducts().then(products => {
            setProducts(products)
        })
    }

    useEffect(getProducts, [])

    return (
        <>
            {products.map(product => <ProductCard key={product.id} product={product} {...props} />)}
        </>
    )
}

export default ProductList