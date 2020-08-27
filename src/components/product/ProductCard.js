import React from 'react'
import Api from '../../api/module'


const ProductCard = (props) => {

    const handleDelete = productId => {
        Api.delete(productId).then(() =>
            props.history.push("/products")
        )
    }

    return (
        <>
            <table>
                <tr>
                    <td>
                        <img src={props.product.image_url} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>{props.product.title}</h3>
                    </td>
                    <td>
                        <p>${props.product.price}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>{props.product.description}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>{props.product.quantity}</p>
                    </td>
                    <td>
                        <p>{props.product.location}</p>
                    </td>
                </tr>
            </table>
            <button onClick={handleDelete}>
                Delete
            </button>
        </>
    )
}

export default ProductCard