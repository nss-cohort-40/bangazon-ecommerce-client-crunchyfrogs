import React, { useState, useEffect } from 'react';
import OrderHistory from './OrderHistory';
// import PaymentOptions from './PaymentOptions';
import AddPaymentType from '../paymenttype/AddPaymentType';

const Account = props => {
    const [orders, setOrders] = useState([])
    // const [paymentOptions, setPaymentOptions] = useState([])

    const handleEditBtn = e => {
        props.history.push('/account/edit')
    }

    return (
        <div className="account_view">
            <div className="account_info">
                {props.customer.user ? <p>{props.customer.user.first_name}</p> : null}
                {props.customer.user ? <p>{props.customer.user.last_name}</p> : null}
                <p>{props.customer.address}</p>
                <p>{props.customer.phone_number}</p>
                {/* <PaymentOptions paymentOptions={paymentOptions} /> */}
                <AddPaymentType />
                <OrderHistory orders={orders} />
            </div>
            <div className="account_settings">
                <button className="account_edit_btn" onClick={handleEditBtn}>Edit Account</button>
            </div>
        </div>
    )
}

export default Account;