import React from 'react'
import Api from '../../api/module'


const ProductCard = (props) => {
    
    const handleDelete = () => {
        Api.deleteProduct(props.product.id).then(props.getProducts)

    }

    const handleDeleteProductOrder = id => {
        fetch(`http://localhost:8000/productorders/${id}`, {
            "method": "DELETE",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(() => props.history.push("/cart"))
    }


    // Make sure the user is logged to click in the link and be redirected to Login
    let productLink = `/products/${props.product.id}`

    return (
        <>
            <table>
                <tbody>

                    <tr>
                        <td>
                            {props.product.image_path ?
                            <img src={props.product.image_path} style={{width:'75px', height:'75px'}}/>
                            :
                            <p></p>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3><a href={productLink}>{props.product.title}</a></h3>
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

            {props.product.productOrderId ?
                <a href="/cart"><button onClick={() => handleDeleteProductOrder(props.product.productOrderId)}>
                    Remove from order
                </button></a>
                : null}
        </>
    )
}

export default ProductCard