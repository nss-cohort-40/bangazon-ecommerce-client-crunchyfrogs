import React from 'react';

const PaymentOptions = props => {
    return (
        <div className="account_payment_options">
            <ul>
                {props.paymentOptions.forEach(payment => <PaymentOptionCard payment={payment} />)}
            </ul>
        </div>
    )
}