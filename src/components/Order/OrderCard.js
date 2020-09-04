import React from 'react';

const OrderCard = props => {
    return (
        <div className="order_card" key={`order_card_${props.order.id}`}>
            <a href={`/orders/${props.order.id}`}>Order #{props.order.id}</a>
        </div>
    )
}

export default OrderCard;