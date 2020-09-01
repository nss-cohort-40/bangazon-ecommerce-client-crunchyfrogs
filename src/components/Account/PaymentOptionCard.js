import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

const PaymentOptionCard = props => {
    const [orderPayment, setOrderPayment] = useState({
        "merchant_name": "",
        "account_number": "",
        "expiration_date": "",
        "customer": props.customer.id
    })

    const handlePayment = e => {
        set
        props.history.push('/confirmation')
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