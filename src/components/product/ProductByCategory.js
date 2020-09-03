import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'


const ProductByCategory = props => {
    const [products, setProducts] = useState([])



    const getProducts = () => {
        fetch(`http://localhost:8000/product?product_type=${props.categoryId}`, {
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
        getProducts()
    }, [])

    return (
        <div>
            {products.map(product => <ProductCard key={product.id} product={product} {...props} />)}
        </div>
    )
}


export default ProductByCategory