import React from 'react'
import Api from '../../api/module'


const ProductCard = (props) => {

    const handleDelete = () => {
        Api.deleteProduct(props.product.id).then(props.getProducts)

    }

    return (
        <>
            <table>
                <tbody>

                    <tr>
                        <td>
                            <img src={props.product.image_url} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3><a href={`/products/categories/${props.product.id}`}>{props.product.title}</a></h3>
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
                </tbody>
            </table>
            {props.customer ?
                < button onClick={handleDelete}>
                    Delete
                </button>
                : null}

        </>
    )
}

export default ProductCard