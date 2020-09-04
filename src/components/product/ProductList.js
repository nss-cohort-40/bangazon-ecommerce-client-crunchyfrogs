import React, { useState, useEffect } from 'react'
import Api from '../../api/module'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

const ProductList = props => {
    const [products, setProducts] = useState([])
    const customer = props.customer
    const listProducts = props.listProducts

    const getProducts = () => {
        Api.getProducts().then(products => {
            const filteredProductsByUser = products.filter(product => product.customer.url.split("/customer/")[1] == customer.id)
            setProducts(filteredProductsByUser)
        })
    }

    useEffect(getProducts, [listProducts])

    return (
        <>
            <Link to={`addproduct/`}>
                <button >
                    Sell Product
            </button>
            </Link>

            {products.map(product => <ProductCard key={product.id} product={product} customer={customer} {...props} />)}
        </>
    )
}

export default ProductList