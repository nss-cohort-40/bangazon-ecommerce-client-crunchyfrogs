import React from 'react';
import PaymentOptionCard from './PaymentOptionCard';

const PaymentOptions = props => {
    return (
        <div className="account_payment_options">
                {props.paymentOptions.map(payment => <PaymentOptionCard payment={payment} cart={props.cart} {...props} customer={props.customer} key={`paymentoption_card_${payment.id}`} />)}
        </div>
    )
}

export default PaymentOptions