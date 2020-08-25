import React, { useState } from 'react';
import OrderHistory from './OrderHistory';
// import PaymentOptions from './PaymentOptions';

const Account = props => {
    const [orders, setOrders] = useState([])
    const [paymentOptions, setPaymentOptions] = useState([])

    return (
        <div className="account_view">
            <div className="account_info">
                <p>{props.customer.firstName}</p>
                <p>{props.customer.lastName}</p>
                <p>{props.customer.address}</p>
                <p>{props.customer.phoneNumber}</p>
                {/* <PaymentOptions paymentOptions={paymentOptions} /> */}
                <OrderHistory orders={orders} />
            </div>
            <div className="account_settings">
                <button className="account_edit_btn" onClick={props.history.push('/account/edit')}>Edit Account</button>
            </div>
        </div>
    )
}

export default Account;