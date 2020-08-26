import React, { useState } from 'react'
import './CategoryComponent.css'

const CategoryComponent = props => {
    const [isShown, setIsShown] = useState(false)

    
    return (
        <li onMouseLeave={() => setIsShown(false)} onMouseEnter={() => setIsShown(true)}>
            <p className="nav_link">{props.category.name}({props.products.map(product => product.product_type.name === props.category.name ? <h3>{product.title}</h3> : null).filter(product => product != null).length})</p>
            {isShown &&
                props.products.map(product => product.product_type.name === props.category.name ? <a className="dropdown-item nav_link" key={product.id} href={`/products/${product.id}`}>{product.title}</a> : null).filter(product => product != null).slice(0, 3)
            }
        </li>
    )
}

export default CategoryComponent