import React from 'react';

const PaymentOptionCard = props => {
    return (
        <ul className="payment_card">
            <li className="payment_card_li">Merchant: {props.payment.merchant_name}</li>
            <li className="payment_card_li">Account: {props.payment.account_number}</li>
            <li className="payment_card_li">Expiration: {props.payment.expiration_date}</li>
        </ul>
    )
}

export default PaymentOptionCard