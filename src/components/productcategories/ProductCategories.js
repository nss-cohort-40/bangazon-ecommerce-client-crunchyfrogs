import React, { useState, useEffect } from "react"
import CategoryComponent from './CategoryComponent'

const ProductCategories = props => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    

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
        console.log(products)
    }, [])

    return (
        <>
            <button onClick={()=>(console.log("categoryIds"))}>CLICK</button>
            {categories.map(category => <CategoryComponent category={category} products={products} key={category.id}/> )}
        </>
    )
}
export default ProductCategories