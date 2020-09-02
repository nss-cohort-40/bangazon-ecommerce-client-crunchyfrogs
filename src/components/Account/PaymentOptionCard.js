import React, { useState } from 'react';

const PaymentOptionCard = props => {

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
            method: 'PUT',
            headers: {
                'Content-type': "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem('bangazon_token')}`
            },
            body: JSON.stringify(order)
        })
    }

    const handlePayment = e => {
        const chosenPayment = props.payment.id
        getOpenOrder().then(openOrder => {
                console.log('order', openOrder[0], 'payment', chosenPayment)
                addPaymentToOrder(openOrder[0], chosenPayment)
            })
            .then(() => props.history.push('/confirmation'))
    }

    return (
        <ul className="payment_card">
            <li className="payment_card_li">Merchant: {props.payment.merchant_name}</li>
            <li className="payment_card_li">Account: {props.payment.account_number}</li>
            <li className="payment_card_li">Expiration: {props.payment.expiration_date}</li>
            {props.cart 
            ? 
            <button onClick={handlePayment}>Select Payment & Place Order</button>
            : 
            null}
        </ul>
    )
}

export default PaymentOptionCard