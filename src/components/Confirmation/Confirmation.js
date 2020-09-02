import React from 'react'

const Confirmation = props => {

    const goHome = e => {
        props.history.push('/')
    }

    return (
        <div className="confirmation_main">
            <h3>Thank you for your order</h3>
            <button onClick={goHome}>Go Home</button>
        </div>
    )
}

export default Confirmation