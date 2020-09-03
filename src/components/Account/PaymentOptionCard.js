import React, { useState } from 'react';

const PaymentOptionCard = props => {
    const [verifyToggle, setVerifyToggle] = useState(true)

    const getOpenOrder = () => {
        return fetch("http://localhost:8000/orders?paymenttype=true", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
            .then(response => response.json())
    }

    const addPaymentToOrder = (order, paymentId) => {
        order.payment_type = paymentId
        return fetch(`http://localhost:8000/orders/${order.id}`, {
            'method': 'PUT',
            'headers': {
                'Content-type': "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('bangazon_token')}`
            },
            body: JSON.stringify(order)
        })
    }

    const deletePayment = () => {
        const paymentId = props.payment.id
        return fetch(`http://localhost:8000/paymenttype/${paymentId}`, {
            'method': 'DELETE',
            'headers': {
                'Content-type': "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('bangazon_token')}`
            },
        })
        .then(() => {setVerifyToggle(!verifyToggle)
            window.alert("Your payment has been deleted")
            props.getPayments()
        })
    }

    const handlePayment = e => {
        const chosenPayment = props.payment.id
        getOpenOrder().then(openOrder => {
                addPaymentToOrder(openOrder[0], chosenPayment)
            })
            .then(() => props.history.push('/confirmation'))
    }

    return (
        <ul className="payment_card">
            <li className="payment_card_li">{props.payment.merchant_name}</li>
            <li className="payment_card_li">Account: {props.payment.account_number}</li>
            <li className="payment_card_li">Expiration: {props.payment.expiration_date}</li>
            {props.account
            ?
            <>
            <button onClick={() => setVerifyToggle(!verifyToggle)}>Delete Payment</button>
            <container hidden={verifyToggle} className="verify-delete">
                <p> Are you sure you want to delete this payment type? This cannot be undone</p>
                <button onClick={deletePayment}>Yes</button>
                <button onClick={() => setVerifyToggle(!verifyToggle)}>No</button>
            </container>
            </>
            :
            null}
            {props.cart 
            ? 
            <button onClick={handlePayment}>Select Payment & Place Order</button>
            : 
            null}
        </ul>
    )
}

export default PaymentOptionCard