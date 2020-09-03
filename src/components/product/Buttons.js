import React from 'react'
import Api from '../../api/module'

const DeleteButton = props => {

    let productId=props.productId

    const handleDelete = () => {
        Api.deleteProduct(productId).then(props.getProducts)
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

    return <>
        <button onClick={handleDelete}>
            Delete
        </button>
        </>
}