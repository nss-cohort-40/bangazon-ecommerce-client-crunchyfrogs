import React from 'react'


const CategoryComponent = props => {

    console.log(props.products)
    return (
        <div>
            <h1>{props.category.name}</h1>
            {props.products.map(product => product.product_type.name === props.category.name ? <h3>{product.title}</h3> : null)}
        </div>
    )
}

export default CategoryComponent