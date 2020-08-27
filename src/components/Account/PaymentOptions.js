import React from 'react';
import PaymentOptionCard from './PaymentOptionCard';

const PaymentOptions = props => {
    return (
        <div className="account_payment_options">
                {props.paymentOptions.map(payment => <PaymentOptionCard payment={payment} />)}
        </div>
    )
}

export default PaymentOptions