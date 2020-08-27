import React, { useState, useEffect } from 'react';
import OrderHistory from './OrderHistory';
import PaymentOptions from './PaymentOptions';
import AddPayment from '../paymenttype/AddPaymentType';

const Account = props => {
    const [orders, setOrders] = useState([])
    const [paymentOptions, setPaymentOptions] = useState([])

    const handleEditBtn = e => {
        props.history.push('/account/edit')
    }

    const getPayments = () => {
        if (props.customer.id) {
            fetch(`http://localhost:8000/paymenttype?customer=${props.customer.id}`, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
                }
            })
            .then(response => response.json())
            .then(data => setPaymentOptions(data))
        }
    }

    useEffect(() => {
        getPayments()
    }, [props.customer])

    return (
        <div className="account_view">
            <div className="account_info">
                <p>{props.customer.user.first_name}</p>
                <p>{props.customer.user.last_name}</p>
                <p>{props.customer.address}</p>
                <p>{props.customer.phone_number}</p>
                <PaymentOptions paymentOptions={paymentOptions} />
                <AddPayment getPayments={getPayments} />
                <OrderHistory orders={orders} />
            </div>
            <div className="account_settings">
                <button className="account_edit_btn" onClick={handleEditBtn}>Edit Account</button>
            </div>
        </div>
    )
}

export default Account;