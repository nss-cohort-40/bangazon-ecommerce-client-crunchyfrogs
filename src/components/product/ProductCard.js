import React from 'react'
import Api from '../../api/module'
import { Link } from 'react-router-dom'

import { DeleteButton, DeleteFromOrderButton } from "./Buttons"


const ProductCard = (props) => {
    let token = localStorage.getItem("bangazon_token")
    let productId = props.product.id


    // Make sure the user is logged to click in the link and be redirected to Login
    let productLink = `/products/${productId}`

    return (<>
        <div className="card m-3" style={{ width: 18 + "rem"}}>
            {props.product.image_path ?
                <img src={props.product.image_path} className="card-img-top" style={{ width: '75px', height: '75px' }} alt={props.product.title} />
                :
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Question-mark.jpg/900px-Question-mark.jpg"} className="card-img-top" style={{ width: '75px', height: '75px' }} alt={props.product.title} />
            }
            <div className="card-body">
                {token ? <Link to={`/products/${productId}`}><h5 className="card-title">{props.product.title}</h5></Link> : <h5 className="card-title">{props.product.title}</h5>}
                <p className="card-text">{props.product.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: ${props.product.price}</li>
                <li className="list-group-item">{props.product.quantity} unit(s) available </li>
                <li className="list-group-item">Location: {props.product.location}{props.product.local_delivery ? " -- Local delivery available" : null}</li>
            </ul>
            <div className="card-body">
                {props.customer ?
                    <DeleteButton productId={productId} {...props} />
                    : null}

                {props.product.productOrderId ?
                    <DeleteFromOrderButton productId={productId} {...props} getProducts={props.getProducts}/>
                    : null}
            </div>
        </div>
    </>)
}

export default ProductCard
