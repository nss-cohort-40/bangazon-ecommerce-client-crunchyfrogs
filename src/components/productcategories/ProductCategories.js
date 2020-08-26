import React, { useState, useEffect } from "react"
import CategoryComponent from './CategoryComponent'

const ProductCategories = props => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [showProducts, setShowProducts] = useState(false)

    

    const toggle = () => {
        setShowProducts(!showProducts)
    }

    const getCategories = () => {
        fetch(`http://localhost:8000/producttypes`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then(category => setCategories(category))
    }

    const getProducts = () => {
        fetch(`http://localhost:8000/product`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then(product => setProducts(product))
    }

    useEffect(() => {
        getCategories()
        getProducts()
    }, [])

    return (
        <div onMouseLeave={() => setShowProducts(false)}>
            <button onClick={toggle}>Show Products</button>
            <ol>
                {
                showProducts && 
                (categories.map(category => <CategoryComponent category={category} products={products} key={category.id}/> ))
                }
            </ol>
        </div>
    )
}
export default ProductCategories