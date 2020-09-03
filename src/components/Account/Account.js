import React, { useState, useEffect } from 'react';
import OrderHistory from './OrderHistory';
import PaymentOptions from './PaymentOptions';
import AddPayment from '../paymenttype/AddPaymentType';

const Account = props => {
    const [orders, setOrders] = useState([])

    const handleEditBtn = e => {
        props.history.push('/account/edit')
    }

    return (
        <div className="account_view">
            <div className="account_info">
                <p>{props.customer.user.first_name}</p>
                <p>{props.customer.user.last_name}</p>
                <p>{props.customer.address}</p>
                <p>{props.customer.phone_number}</p>
                <PaymentOptions account={true} paymentOptions={props.paymentOptions} {...props} />
                <AddPayment getPayments={props.getPayments} />
                <OrderHistory orders={orders} />
            </div>
            <div className="account_settings">
                <button className="account_edit_btn" onClick={handleEditBtn}>Edit Account</button>
            </div>
        </div>
    )
}

export default Account;