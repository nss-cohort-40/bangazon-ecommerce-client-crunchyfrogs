import React from 'react'
import Api from '../../api/module'

export const DeleteButton = props => {
    let productId=props.productId
    let getProducts=props.getProducts

    const handleDelete = () => {
        Api.deleteProduct(productId).then(getProducts)
    }

    return <>
        <button onClick={handleDelete} className="card-link">
            Delete
        </button>
        </>
}


export const DeleteFromOrderButton = props => {
    let productId=props.productId
    let getProducts=props.getProducts

    const handleDeleteProductOrder = id => {
    fetch(`http://localhost:8000/productorders/${id}`, {
        "method": "DELETE",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
        }
    }).then(data=>{
        getProducts()
    return data})
    .then((data) => 
    props.history.push("/cart"))
    }

    return <>                
        <a href="/cart"  className="card-link"><button onClick={() => handleDeleteProductOrder(props.product.productOrderId)}>
            Remove from order
        </button></a>
</>
}
