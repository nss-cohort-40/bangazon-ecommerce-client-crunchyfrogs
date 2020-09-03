import React from 'react'
import Api from '../../api/module'

import DeleteButton from "./Buttons"


const ProductCard = (props) => {
    
    let productId = props.product.id


    // Make sure the user is logged to click in the link and be redirected to Login
    let productLink = `/products/${productId}`

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
                        {/* To be corrected later */}
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
                    <DeleteButton productId={productId} {...props}>
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