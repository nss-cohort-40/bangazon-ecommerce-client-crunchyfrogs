import React from 'react';
import OrderCard from './OrderCard';

const OrderHistory = props => {
    return (
        <div className="order_history_list">
            <h3>All Orders:</h3>
            {props.orders.map(order => <OrderCard order={order} />)}
        </div>
    )
}

export default OrderHistory;